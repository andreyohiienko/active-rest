import { SaveFilled } from '@ant-design/icons'
import { gql, useMutation } from '@apollo/client'
import {
  Button,
  Card,
  Col,
  Layout,
  message,
  Row,
  Space,
  Switch,
  Typography,
} from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import { omit } from 'lodash'
import React, { FC, useEffect, useState } from 'react'
import { FetchHomePage } from 'types'
import { useServicesState } from './useServicesState'

const SAVE_SERVICES = gql`
  mutation SaveServices($services: [ServiceInput]) {
    saveServices(input: { services: $services })
  }
`

const { Title, Paragraph } = Typography

interface Props {
  sectionServices: FetchHomePage['sectionServices']
}

const Services: FC<Props> = ({ sectionServices }) => {
  const isAdmin = useAdmin()
  const [isVisible, setIsVisible] = useState(sectionServices?.isVisible)
  const { state, updateTitle, updateDesc } = useServicesState(
    sectionServices?.services || null,
  )
  const [saveServices, { data, loading }] = useMutation(SAVE_SERVICES)

  useEffect(() => {
    if (data) {
      message.success(data.saveServices)
    }
  }, [data])

  function renderControls() {
    if (!isAdmin) {
      return <></>
    }

    return (
      <Space className="mb-10" align="end" size="large">
        <Button
          loading={loading}
          onClick={() =>
            saveServices({
              variables: {
                services: state?.map((service) => omit(service, ['id'])),
              },
            })
          }
          type="primary"
          shape="circle"
        >
          <SaveFilled />
        </Button>
        <Switch
          loading={loading}
          checked={isVisible || undefined}
          onChange={() => setIsVisible(!isVisible)}
        />
      </Space>
    )
  }

  if (!isVisible && !isAdmin) {
    return <></>
  }

  return (
    <Layout className="services pb-lg-75 pb-50">
      <Container className="position-relative">
        {renderControls()}
        <Row gutter={30}>
          {state?.map((service) => {
            if (service) {
              const { id, title, desc, image } = service
              return (
                <Col
                  key={title}
                  lg={6}
                  sm={12}
                  className="text-center w-100 d-flex align-items-stretch py-10 py-lg-0"
                >
                  <Card
                    bodyStyle={{ padding: '60px 40px' }}
                    bordered={false}
                    className="service-card w-100"
                  >
                    <img alt={title || undefined} src={image || undefined} />
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
        </Row>
      </Container>
    </Layout>
  )
}

export { Services }
