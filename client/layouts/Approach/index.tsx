import { Button, Col, Input, Layout, Row } from 'antd'
import { Container } from 'components'
import React, { useState } from 'react'
import { SubmitMail } from 'static'
import { MailOutlined } from '@ant-design/icons'

export const Approach = () => {
  const [email, setEmail] = useState('')
  const onClick = () => {
    console.log('email', email)
  }
  return (
    <Layout className="pb-lg-90 pb-50 mt-lg-75 mt-50">
      <Container className="approach">
        <Row
          align="middle"
          className="approach__row rounded bg-cover py-40 py-md-0"
          style={{ backgroundImage: 'url(/images/approach-bg.svg)' }}
        >
          <Col
            md={{ span: 12, push: 12 }}
            className="d-flex justify-content-center w-100 px-15 px-md-0"
          >
            <img
              src="/images/camping.png"
              alt="camping"
              className="py-md-20 mw-100"
            />
          </Col>
          <Col
            md={{ span: 12, pull: 12 }}
            className="d-flex flex-column align-items-center w-100 px-15 mt-40 mt-md-0"
          >
            <div className="approach__wrapper">
              <h2 className="text-center text-md-left mb-20 mb-md-10">
                Let's Stay in Touch
              </h2>
              <p className="text-center text-md-left mb-20 mb-md-20">
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
        </Row>
      </Container>
    </Layout>
  )
}