import { InboxOutlined } from '@ant-design/icons'
import { gql, Reference, useMutation, useQuery } from '@apollo/client'
import { Upload, message } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { RcCustomRequestOptions, UploadFile } from 'antd/lib/upload/interface'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import React, { useState } from 'react'

interface Media {
  id: string
  path: string
  filename: string
  mimetype: string
}

const UPLOAD_MEDIA = gql`
  mutation uploadMedia($file: Upload!) {
    uploadMedia(file: $file) {
      id
      filename
      path
      mimetype
    }
  }
`

const REMOVE_MEDIA = gql`
  mutation removeMedia($id: ID!, $name: String) {
    removeMedia(id: $id, name: $name) {
      id
    }
  }
`

const ALL_MEDIA = gql`
  query AllMedia {
    allMedia {
      id
      path
      filename
      mimetype
    }
  }
`

const Files = () => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  const [uploadMedia] = useMutation(UPLOAD_MEDIA, {
    update(cache, { data: { uploadMedia } }) {
      cache.modify({
        fields: {
          allMedia(existingMediaRefs = []) {
            const newMediaRefs = cache.writeFragment({
              data: uploadMedia,
              fragment: gql`
                fragment newMedia on uploadMedia {
                  id
                  filename
                  path
                  mimetype
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
        `${data.uploadMedia.filename} file uploaded successfully.`,
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

  const [removeMedia] = useMutation(REMOVE_MEDIA, {
    update(cache, { data: { removeMedia } }) {
      cache.modify({
        fields: {
          allMedia(existingMediaRefs) {
            const removedMedia = cache.writeFragment({
              data: removeMedia,
              fragment: gql`
                fragment removeMedia on removeMedia {
                  id
                }
              `,
            })

            console.log('removedMedia', removedMedia)

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
        id: file.uid,
        name: file.name,
      },
    })

    if (file.status === 'done') {
      message.success(`${file.name} file removed successfully.`)
    }
  }

  const { error, loading, data } = useQuery(ALL_MEDIA)

  const fileList = data?.allMedia?.map(
    ({ id, path, filename, mimetype }: Media) => ({
      uid: id,
      name: filename,
      url: `http://localhost:5000/${path}`,
      status: 'done',
      type: mimetype,
    }),
  )

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
