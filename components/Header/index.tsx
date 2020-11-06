import { Button, Col, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import { Container } from 'components'

const Header = () => {
  return (
    <header className="position-absolute w-100">
      <Container>
        <Row>
          <Col md="18">
            <Space size="middle">
              <Link href="/">
                <a>
                  <img src="https://via.placeholder.com/50" alt="logo" />
                </a>
              </Link>
              <nav>
                <Space size="middle">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </Space>
              </nav>
            </Space>
          </Col>
          <Col flex="auto" className="d-flex justify-content-end">
            <Button type="text" shape="round">
              Sign Up
            </Button>
            <Button ghost shape="round">
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export { Header }
