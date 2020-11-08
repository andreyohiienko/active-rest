import { Card, Col, Layout, Row } from 'antd'
import { Container } from 'components'
import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Camping & Day Use',
      desc:
        'Return to your favorite spot or discover a new one that’s right for you.',
    },
    {
      title: 'Tours & Tickets',
      desc: 'Reserve tours and tickets to participate in events.',
    },
    {
      title: 'Permits',
      desc: 'Obtain permits for access to high-demand locations.',
    },
    {
      title: 'Recreation Activities',
      desc: 'Find the best spots for hunting, fishing & recreational shooting.',
    },
  ]

  return (
    <Layout className="services pb-lg-75 pb-50">
      <Container>
        <Row gutter={30}>
          {services.map(({ title, desc }) => (
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
                <img alt="example" src="https://picsum.photos/85" />
                <h3 className="mt-15 pt-5 mb-10">{title}</h3>
                <p className="mb-0">{desc}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export { Services }
