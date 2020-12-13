import { InboxOutlined } from '@ant-design/icons'
import { gql, useMutation, useQuery } from '@apollo/client'
import { Upload, message } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
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
  mutation uploadMedia($file: Upload) {
    uploadMedia(file: $file) {
      id
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

  const [uploadMedia] = useMutation(UPLOAD_MEDIA)

  async function onChange(info: UploadChangeParam) {
    const { file } = info
    const { status } = info.file
    if (status !== 'uploading') {
      await uploadMedia({
        variables: {
          file: file.originFileObj,
        },
      })
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
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

  const [removeMedia] = useMutation(REMOVE_MEDIA)

  async function onRemove(file: UploadFile) {
    console.log('file', file)
    await removeMedia({
      variables: {
        id: file.uid,
        name: file.name,
      },
    })

    if (file.status === 'removed') {
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
          {...{ onPreview, onChange, onRemove }}
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
