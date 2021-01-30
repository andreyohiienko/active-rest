import { InboxOutlined } from '@ant-design/icons'
import { gql, Reference } from '@apollo/client'
import { message, Upload } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { RcCustomRequestOptions, UploadFile } from 'antd/lib/upload/interface'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import React, { useState } from 'react'
import {
  useAllMediaQuery,
  useRemoveMediaMutation,
  useUploadMediaMutation,
} from 'types'

gql`
  mutation uploadMedia($file: Upload!) {
    uploadMedia(file: $file) {
      public_id
      original_filename
      secure_url
      format
    }
  }
`

gql`
  mutation removeMedia($public_id: String!) {
    removeMedia(public_id: $public_id) {
      public_id
    }
  }
`

gql`
  query AllMedia {
    allMedia {
      public_id
      url
      format
      bytes
    }
  }
`

const Files = () => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const [uploadMedia] = useUploadMediaMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          allMedia(existingMediaRefs = []) {
            const newMediaRefs = cache.writeFragment({
              data: data?.uploadMedia,
              fragment: gql`
                fragment newMedia on Media {
                  public_id
                  url
                  format
                  bytes
                }
              `,
            })

            return [...existingMediaRefs, newMediaRefs]
          },
        },
      })
    },
  })

  async function customRequest({ file, onError }: RcCustomRequestOptions) {
    try {
      const { data } = await uploadMedia({
        variables: {
          file,
        },
      })

      message.success(
        `${data?.uploadMedia?.public_id} file uploaded successfully.`,
      )
    } catch (error) {
      onError(error, {}, file)
    }
  }

  function onPreview(file: UploadFile) {
    const { url, name } = file
    if (url) {
      setPreviewImage(url)
    }
    if (name) {
      setPreviewTitle(name)
    }
    if (file) {
      setPreviewVisible(true)
    }
  }

  const [removeMedia] = useRemoveMediaMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          allMedia(existingMediaRefs) {
            const removedMedia = cache.writeFragment({
              data: data?.removeMedia,
              fragment: gql`
                fragment removeMedia on Media {
                  id
                }
              `,
            })

            return existingMediaRefs.filter(
              (mediaRef: Reference) => mediaRef.__ref !== removedMedia?.__ref,
            )
          },
        },
      })
    },
  })

  async function onRemove(file: UploadFile) {
    await removeMedia({
      variables: {
        public_id: file.uid,
      },
    })

    if (file.status === 'done') {
      message.success(`${file.name} file removed successfully.`)
    }
  }

  const { data } = useAllMediaQuery()

  const fileList: UploadFile[] =
    data?.allMedia.map(({ public_id, url, format, bytes }) => {
      return {
        uid: public_id,
        name: public_id,
        size: bytes,
        type: `image/${format}`,
        url: url,
        status: 'done',
      }
    }) || []

  return (
    <Dashboard>
      <Container fluid>
        <Upload
          type="drag"
          listType="picture-card"
          fileList={fileList}
          multiple
          {...{
            customRequest,
            onPreview,
            onRemove,
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={() => setPreviewVisible(false)}
        >
          <img
            alt={previewTitle}
            style={{ width: '100%' }}
            src={previewImage}
          />
        </Modal>
      </Container>
    </Dashboard>
  )
}

export default Files
