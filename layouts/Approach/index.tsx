import { Button, Col, Form, Input, Layout, Row } from 'antd'
import { Container } from 'components'
import React from 'react'
import { Camping } from 'static'

export const Approach = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Let's Stay in Touch</h2>
            <p>
              Get travel planning ideas, helpful tips, and stories from our
              visitors delivered right to your inbox.
            </p>
            <Form>
              <Input
                placeholder="Email Address"
                type="email"
                size="large"
                prefix={<span>mail</span>}
                suffix={
                  <Button type="primary" size="large">
                    submit
                  </Button>
                }
              />
            </Form>
          </Col>
          <Col xs={12}>
            <Camping />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
