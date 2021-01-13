import { gql, useLazyQuery } from '@apollo/client'
import { Button, Col, Image, Modal, Row, Space } from 'antd'
import React, { FC, useState } from 'react'
import { Medias, Medias_list } from 'types'
import classNames from 'classnames'
import { serverUrl } from 'utils'
import { useAdmin } from 'hooks'
import { ButtonImage } from 'components/Buttons'

interface ImagePayload {
  updatedImage: string
  id: string
}
interface Props {
  id?: string | null
  setUpdatedImage: (payload: ImagePayload) => void
  className?: string
}

export const SelectImage: FC<Props> = ({ id, setUpdatedImage, className }) => {
  const MEDIAS = gql`
    query MediasMain {
      list: allMedia {
        id
        path
        filename
        mimetype
      }
    }
  `

  const [getMedias, { error, loading, data }] = useLazyQuery<Medias>(MEDIAS)

  const [visible, setVisible] = useState(false)
  // const [confirmLoading, setConfirmLoading] = useState(false)
  const [detail, setDetail] = useState<Medias_list>()
  const isAdmin = useAdmin()

  function renderModal() {
    if (loading) {
      return <div>Loading....</div>
    }

    return (
      <Space size="large">
        {data?.list?.map((item) => {
          if (item) {
            const { id, path, filename } = item
            return (
              <Image
                className={classNames('shadowing', {
                  'shadow-sm': id === detail?.id,
                })}
                onClick={() => setDetail(item)}
                width={150}
                height={150}
                key={id}
                src={serverUrl + path}
                alt={filename}
                preview={false}
              />
            )
          }
        })}
      </Space>
    )
  }

  function renderDetails() {
    if (detail) {
      const { id, filename, path } = detail
      return (
        <Col flex="500px">
          <div className="border p-10">
            <Row>
              <Col flex="100px">ID</Col>
              <Col flex="auto">{id}</Col>
            </Row>
            <Row>
              <Col flex="100px">Path</Col>
              <Col flex="auto">{serverUrl + path}</Col>
            </Row>
            <Row>
              <Col flex="100px">Name</Col>
              <Col flex="auto">{filename}</Col>
            </Row>
          </div>
        </Col>
      )
    }
  }

  function onClick() {
    getMedias()
    setVisible(true)
  }

  function onSelect() {
    if (detail && id) {
      setUpdatedImage({ updatedImage: detail.path, id })
      setVisible(false)
    }
  }

  if (isAdmin) {
    return (
      <>
        <ButtonImage className={className} onClick={onClick} />
        <Modal
          title="Select image"
          visible={visible}
          width="100%"
          onCancel={() => setVisible(false)}
          footer={[
            <Button key="back" onClick={() => setVisible(false)}>
              Cancel
            </Button>,
            <Button
              disabled={!detail}
              key="submit"
              type="primary"
              onClick={onSelect}
            >
              Select
            </Button>,
          ]}
        >
          <Row gutter={30}>
            <Col flex="auto">{renderModal()}</Col>
            {renderDetails()}
          </Row>
        </Modal>
      </>
    )
  }

  return <></>
}
