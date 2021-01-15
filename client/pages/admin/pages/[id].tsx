import React from 'react'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/dist/client/router'
import { gql, useQuery } from '@apollo/client'
import { Col, Row, Tabs, Typography } from 'antd'
import { Container } from 'components'

const { Title } = Typography
const { TabPane } = Tabs

const Page = () => {
  const router = useRouter()

  const PAGE = gql`
    query Page($id: ID!) {
      page(id: $id) {
        id
        title
      }
    }
  `

  const { data } = useQuery(PAGE, {
    variables: { id: router?.query.id },
  })

  const tabs = [
    { title: 'Services', content: 'Services' },
    { title: 'Destination', content: 'Destination' },
    { title: 'Get in touch', content: 'Getin touch' },
  ]

  return (
    <Dashboard>
      <Container fluid>
        <Row gutter={30}>
          <Col flex="auto">
            <Title>{data?.page.title}</Title>
            <Tabs defaultActiveKey="1">
              {tabs.map(({ title, content }) => (
                <TabPane tab={title} key={title}>
                  {content}
                </TabPane>
              ))}
            </Tabs>
          </Col>
          <Col flex="300px"></Col>
        </Row>
      </Container>
    </Dashboard>
  )
}

export default Page
