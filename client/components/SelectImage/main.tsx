import { gql } from '@apollo/client'
import { Button, Col, Image, Modal, Row } from 'antd'
import classNames from 'classnames'
import { ButtonImage } from 'components/Buttons'
import { useAdmin } from 'hooks'
import React, { Dispatch, FC, useState } from 'react'
import { useMediasMainLazyQuery, Media } from 'types'

gql`
  query MediasMain {
    list: allMedia {
      id
      public_id
      url
      format
      bytes
    }
  }
`

interface ImagePayload {
  updatedImage: string
  id: string
}
interface Props {
  id?: string | null
  setUpdatedImage?: (payload: ImagePayload) => void
  setImage?: Dispatch<string>
  className?: string
}

export const SelectImage: FC<Props> = ({
  id,
  setUpdatedImage,
  className,
  setImage,
}) => {
  const [getMedias, { loading, data }] = useMediasMainLazyQuery()

  const [visible, setVisible] = useState(false)
  const [detail, setDetail] = useState<Media>()
  const isAdmin = useAdmin()

  function renderModal() {
    if (loading) {
      return <div>Loading....</div>
    }

    return (
      <Row gutter={[20, 20]}>
        {data?.list?.map((item) => {
          if (item) {
            const { public_id, url } = item
            return (
              <Col key={id}>
                <Image
                  className={classNames('shadowing', {
                    'shadow-sm': public_id === detail?.public_id,
                  })}
                  onClick={() => setDetail(item)}
                  width={150}
                  height={150}
                  src={url}
                  alt={public_id}
                  preview={false}
                />
              </Col>
            )
          }
        })}
      </Row>
    )
  }

  function renderDetails() {
    if (detail) {
      const { public_id, url, id } = detail
      return (
        <Col flex="500px">
          <div className="border p-10">
            <Row>
              <Col flex="100px">ID</Col>
              <Col flex="auto">{id}</Col>
            </Row>
            <Row>
              <Col flex="100px">Path</Col>
              <Col
                className="text-truncate"
                flex="auto"
                style={{ maxWidth: 'calc(100% - 100px)' }}
              >
                {url}
              </Col>
            </Row>
            <Row>
              <Col flex="100px">Name</Col>
              <Col flex="auto">{public_id}</Col>
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
    if (detail && id && setUpdatedImage) {
      setUpdatedImage({ updatedImage: detail.url, id })
    }
    if (detail && setImage) {
      setImage(detail.url)
    }
    setVisible(false)
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
              // disabled={!detail}
              key="submit"
              type="primary"
              onClick={onSelect}
            >
              Select
            </Button>,
          ]}
        >
          <Row gutter={30}>
            <Col flex="auto" style={{ maxWidth: 'calc(100% - 500px)' }}>
              {renderModal()}
            </Col>
            {renderDetails()}
          </Row>
        </Modal>
      </>
    )
  }

  return <></>
}
