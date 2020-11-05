import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button, Col, Row, Space } from 'antd'
import { Container, Footer } from '@components'

type Props = {
  children?: ReactNode
  title?: string
}

const PageLayout = ({
  children,
  title = 'This is the default title',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
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
    {children}
    <Footer />
  </div>
)

export { PageLayout }
