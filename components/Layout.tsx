import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button, Col, Row, Space } from 'antd'
import { Container } from './Container'

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
          <Col span="18">
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
    <footer>
      <Container>
        <Row>
          <Col md={12}>
            <h6>Hipcamp is everywhere you want to camp.</h6>
            <p>
              Discover unique experiences on ranches, nature preserves, farms,
              vineyards, and public campgrounds across the U.S. Book tent
              camping, treehouses, cabins, yurts, primitive backcountry sites,
              car camping, airstreams, tiny houses, RV camping, glamping tents
              and more.
            </p>
          </Col>
          <Col md={12}>
            <h6 className="text-capitalize">Get to know us</h6>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="text-center">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  </div>
)

export default PageLayout
