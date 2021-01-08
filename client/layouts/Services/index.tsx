import { Card, Col, Layout, Row, Typography } from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import React from 'react'
import { useServicesState } from './useServicesState'

const { Title, Paragraph } = Typography

const Services = () => {
  const services = [
    {
      id: '1',
      title: 'Camping & Day Use',
      desc:
        'Return to your favorite spot or discover a new one that’s right for you.',
      src: 'images/camping-day-use.svg',
    },
    {
      id: '2',
      title: 'Tours & Tickets',
      desc: 'Reserve tours and tickets to participate in events.',
      src: 'images/tour-tickets.svg',
    },
    {
      id: '3',
      title: 'Permits',
      desc: 'Obtain permits for access to high-demand locations.',
      src: 'images/permits.svg',
    },
    {
      id: '4',
      title: 'Recreation Activities',
      desc: 'Find the best spots for hunting, fishing & recreational shooting.',
      src: 'images/recreation-activities.svg',
    },
  ]

  const isAdmin = useAdmin()
  const { state, updateTitle, updateDesc } = useServicesState(services)

  return (
    <Layout className="services pb-lg-75 pb-50">
      <Container>
        <Row gutter={30}>
          {state.map((service) => {
            if (service) {
              const { id, title, desc, src } = service
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
                    <img alt={title} src={src} />
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
