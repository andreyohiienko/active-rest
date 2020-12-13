import { InboxOutlined } from '@ant-design/icons'
import { gql, useMutation } from '@apollo/client'
import { Upload, message } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import React, { useState } from 'react'

const UPLOAD_MEDIA = gql`
  mutation uploadMedia($file: Upload!) {
    uploadMedia(file: $file) {
      filename
    }
  }
`

const Files = () => {
  const fileList: Array<UploadFile> = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 1000,
      type: '',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 1000,
      type: '',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 1000,
      type: '',
    },
    {
      uid: '-4',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      size: 1000,
      type: '',
    },
  ]
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

  return (
    <Dashboard>
      <Container fluid>
        <Upload
          type="drag"
          listType="picture-card"
          fileList={fileList}
          multiple
          onChange={onChange}
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
      </Container>
    </Dashboard>
  )
}

export default Files
