import { Card, Col, Layout, Row, Typography } from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import React, { FC } from 'react'
import { FetchHomePage } from 'types'
import { useServicesState } from './useServicesState'

const { Title, Paragraph } = Typography

interface Props {
  services: FetchHomePage['services']
}

const Services: FC<Props> = ({ services }) => {
  const isAdmin = useAdmin()
  const { state, updateTitle, updateDesc } = useServicesState(services)

  return (
    <Layout className="services pb-lg-75 pb-50">
      <Container>
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
