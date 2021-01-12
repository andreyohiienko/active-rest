import { PlusOutlined } from '@ant-design/icons'
import { gql, useMutation } from '@apollo/client'
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
import { useAdmin } from 'hooks'
import { omit } from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import {
  FetchHomePage,
  SaveServices,
  SaveServicesVariables,
  TriggerServicesVis,
  TriggerServicesVisVariables,
} from 'types'
import { useServicesState } from './useServicesState'

const SAVE_SERVICES = gql`
  mutation SaveServices($services: [ServiceInput]) {
    saveServices(input: { services: $services })
  }
`
const SECTION_VISIBILITY = gql`
  mutation TriggerServicesVis($isVisible: Boolean) {
    triggerServicesVis(isVisible: $isVisible)
  }
`

const { Title, Paragraph } = Typography

interface Props {
  sectionServices: FetchHomePage['sectionServices']
}

const Services: FC<Props> = ({ sectionServices }) => {
  const isAdmin = useAdmin()
  const [isVisible, setIsVisible] = useState(sectionServices?.isVisible)
  const {
    state,
    updateTitle,
    updateDesc,
    removeService,
    createService,
  } = useServicesState(sectionServices?.services || null)

  const [saveServices, { data, loading }] = useMutation<
    SaveServices,
    SaveServicesVariables
  >(SAVE_SERVICES)
  const [
    triggerVisibility,
    { data: triggerData, loading: triggerLoading },
  ] = useMutation<TriggerServicesVis, TriggerServicesVisVariables>(
    SECTION_VISIBILITY,
  )

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
      <Space className="mb-10" align="end" size="large">
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
        onClick={() => removeService({ serviceId: id })}
      />
    )
  }

  if (!isVisible && !isAdmin) {
    return <></>
  }

  return (
    <Layout className="services pb-lg-75 pb-50">
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
                    <img
                      className="service__image"
                      alt={title || undefined}
                      src={image || undefined}
                    />
                    <Title
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateTitle({
                                  serviceId: id,
                                  updatedTitle: e,
                                }),
                            }
                          : false
                      }
                      level={3}
                      className="h3 mt-15 pt-5 mb-10"
                    >
                      {title}
                    </Title>
                    <Paragraph
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateDesc({
                                  serviceId: id,
                                  updatedDesc: e,
                                }),
                            }
                          : false
                      }
                      className="mb-0"
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

export { Services }
