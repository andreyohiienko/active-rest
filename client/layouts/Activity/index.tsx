import { Button, Col, Layout, Row, Typography } from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import React, { useState } from 'react'
const { Title, Paragraph } = Typography

export const ActivityLayout = () => {
  const isAdmin = useAdmin()
  const [title, setTitle] = useState('Title...')
  const [shortDesc, setShortDesc] = useState('Showrt description...')
  const [desc, setDesc] = useState('Description...')

  return (
    <Layout className="act">
      <Container>
        <div
          className="act__hero bg-full"
          style={{ backgroundImage: 'url(/images/placeholder.png)' }}
        ></div>
        <Row gutter={30} className="mt-50">
          <Col md={{ span: 18 }}>
            <Title
              editable={
                isAdmin ? { onChange: (e: string) => setTitle(e) } : false
              }
              className="h1 act__title"
            >
              {title}
            </Title>
          </Col>
          <Col md={{ span: 6 }} className="text-right">
            <Title className="act__price" level={5}>
              $35/night
            </Title>
            <Button size="large" type="primary" shape="round">
              BOOK
            </Button>
          </Col>
        </Row>
        <Paragraph
          editable={
            isAdmin ? { onChange: (e: string) => setShortDesc(e) } : false
          }
        >
          {shortDesc}
        </Paragraph>
        <Paragraph
          editable={isAdmin ? { onChange: (e: string) => setDesc(e) } : false}
        >
          {desc}
        </Paragraph>
      </Container>
    </Layout>
  )
}
