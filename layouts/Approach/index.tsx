import { Button, Col, Input, Layout, Row } from 'antd'
import { Container } from 'components'
import React, { useState } from 'react'
import { Camping, SubmitMail } from 'static'
import { MailOutlined } from '@ant-design/icons'

export const Approach = () => {
  const [email, setEmail] = useState('')
  const onClick = () => {
    console.log('email', email)
  }
  return (
    <Layout>
      <Container className="approach">
        <Row
          align="middle"
          className="approach__row rounded bg-cover"
          style={{ backgroundImage: 'url(/images/approach-bg.svg)' }}
        >
          <Col xs={12} className="d-flex flex-column align-items-center">
            <div className="approach__wrapper">
              <h2>Let's Stay in Touch</h2>
              <p>
                Get travel planning ideas, helpful tips, and stories from our
                visitors delivered right to your inbox.
              </p>
              <Input
                onPressEnter={onClick}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email Address"
                type="email"
                size="large"
                prefix={
                  <MailOutlined
                    style={{
                      fontSize: 22,
                      color: '#8D8D8D',
                      paddingRight: 10,
                      paddingLeft: 15,
                    }}
                  />
                }
                suffix={
                  <Button
                    onClick={onClick}
                    style={{
                      padding: 0,
                      height: 50,
                      width: 50,
                    }}
                    type="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <SubmitMail />
                  </Button>
                }
              />
            </div>
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <Camping />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
