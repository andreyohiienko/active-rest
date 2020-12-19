import { gql, useLazyQuery } from '@apollo/client'
import { Modal, Button, Image, Space, Upload } from 'antd'
import { UploadFile } from 'antd/lib/upload/interface'
import React, { FC, useState } from 'react'
import { Medias } from 'types'

interface Props {
  image: string | null
}

export const SelectImage: FC<Props> = ({ image }) => {
  const MEDIAS = gql`
    query Medias {
      list: allMedia {
        id
        path
        filename
        mimetype
      }
    }
  `

  const [getMedias, { error, loading, data }] = useLazyQuery<Medias>(MEDIAS)

  const fileList = data?.list?.reduce<UploadFile[]>((prev, curr) => {
    if (curr) {
      const { id, path, filename, mimetype } = curr
      return [
        ...prev,
        {
          uid: id,
          name: filename,
          size: 200,
          url: `http://localhost:5000/${path}`,
          status: 'done',
          type: mimetype,
        },
      ]
    }

    return prev
  }, [])

  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  function renderModal() {
    if (loading) {
      return <div>Loading....</div>
    }

    return (
      <Space>
        <Upload listType="picture-card" fileList={fileList} />
      </Space>
    )
  }

  function onClick() {
    getMedias()
    setVisible(true)
  }
  return (
    <>
      <Space align="end">
        <Image width={200} src={image || undefined} alt="image" />
        <Button onClick={onClick} type="primary">
          Add Image
        </Button>
      </Space>
      <Modal
        title="Select image"
        visible={visible}
        width="100%"
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Select
          </Button>,
        ]}
      >
        {renderModal()}
      </Modal>
    </>
  )
}
