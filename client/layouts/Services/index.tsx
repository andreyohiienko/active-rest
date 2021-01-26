import { PlusOutlined } from '@ant-design/icons'
import { gql } from '@apollo/client'
import {
  Button,
  Card,
  Col,
  Layout,
  message,
  Row,
  Space,
  Typography,
} from 'antd'
import {
  ButtonDelete,
  ButtonSave,
  SwitchVisibility,
  Container,
} from 'components'
import { SelectImage } from 'components/SelectImage/main'
import { useAdmin } from 'hooks'
import { omit } from 'lodash'
import React, { useEffect, useState } from 'react'
import {
  useSaveServicesMutation,
  useServicesQuery,
  useTriggerServicesVisMutation,
} from 'types'
import { serverUrl } from 'utils'
import { useServicesState } from './useServicesState'
import classNames from 'classnames'

gql`
  query Services {
    section: services {
      isVisible
      services {
        id
        title
        desc
        image
      }
    }
  }
`

gql`
  mutation SaveServices($services: [ServiceInput]) {
    saveServices(input: { services: $services })
  }
`

gql`
  mutation TriggerServicesVis($isVisible: Boolean) {
    triggerServicesVis(isVisible: $isVisible)
  }
`

const { Title, Paragraph } = Typography

const ServicesSection = () => {
  const { data: initialState } = useServicesQuery()

  const isAdmin = useAdmin()
  const [isVisible, setIsVisible] = useState(initialState?.section?.isVisible)
  const {
    state,
    updateTitle,
    updateDesc,
    removeService,
    updateImage,
    createService,
  } = useServicesState(initialState?.section?.services || null)

  const [saveServices, { data, loading }] = useSaveServicesMutation()
  const [
    triggerVisibility,
    { data: triggerData, loading: triggerLoading },
  ] = useTriggerServicesVisMutation()

  useEffect(() => {
    if (data) {
      message.success(data.saveServices)
    }
  }, [data])

  useEffect(() => {
    if (triggerData) {
      message.success(triggerData.triggerServicesVis)
    }
  }, [triggerData])

  function renderControls() {
    if (!isAdmin) {
      return <></>
    }

    function onSwitchChange() {
      triggerVisibility({
        variables: {
          isVisible: !isVisible,
        },
      })
      setIsVisible(!isVisible)
    }

    return (
      <Space className="mb-10" align="center" size="large">
        <ButtonSave
          loading={loading}
          onClick={() =>
            saveServices({
              variables: {
                services: state?.map((service) => omit(service, ['id'])),
              },
            })
          }
        />
        <SwitchVisibility
          loading={loading || triggerLoading}
          checked={isVisible || undefined}
          onChange={() => onSwitchChange()}
        />
      </Space>
    )
  }

  function renderAddMoreButton() {
    if (!isAdmin) {
      return <></>
    }

    return (
      <Col span={24} className="text-center">
        <Button
          onClick={() => createService()}
          icon={<PlusOutlined />}
          type="primary"
        >
          Add Service
        </Button>
      </Col>
    )
  }

  function renderRemoveButton(id: string) {
    if (!isAdmin) {
      return <></>
    }

    return (
      <ButtonDelete
        className="position-absolute pos-right-top z-1"
        onClick={() => removeService({ id })}
      />
    )
  }

  if (!isVisible && !isAdmin) {
    return <></>
  }

  return (
    <Layout
      className={classNames('services pb-lg-75 pb-50', {
        'hidden-section': !isVisible,
      })}
    >
      <Container className="position-relative">
        {renderControls()}
        <Row gutter={[30, 30]}>
          {state?.map((service) => {
            if (service) {
              const { id, title, desc, image } = service
              return (
                <Col
                  key={id}
                  lg={6}
                  sm={12}
                  className="text-center w-100 d-flex align-items-stretch py-10 py-lg-0"
                >
                  <Card
                    bodyStyle={{ padding: '60px 40px' }}
                    bordered={false}
                    className="service-card w-100"
                  >
                    {renderRemoveButton(id)}
                    <div className="d-inline-block position-relative">
                      <SelectImage
                        id={id}
                        setUpdatedImage={updateImage}
                        className="position-absolute"
                      />
                      <img
                        className="service__image"
                        alt={title || undefined}
                        src={serverUrl + image || undefined}
                      />
                    </div>
                    <Title
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateTitle({
                                  id,
                                  updatedTitle: e,
                                }),
                            }
                          : false
                      }
                      level={3}
                      className="h3 mt-15f pt-5f mb-10f"
                    >
                      {title}
                    </Title>
                    <Paragraph
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateDesc({
                                  id,
                                  updatedDesc: e,
                                }),
                            }
                          : false
                      }
                      className="mb-0f"
                    >
                      {desc}
                    </Paragraph>
                  </Card>
                </Col>
              )
            }
          })}
          {renderAddMoreButton()}
        </Row>
      </Container>
    </Layout>
  )
}

export { ServicesSection }
