import { Button, Col, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import { Container } from 'components'

const Header = () => {
  const links = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/contact',
      title: 'Contact',
    },
  ]

  return (
    <header className="header position-absolute w-100 text-white">
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
                  {links.map(({ href, title }) => (
                    <Link key={title} href={href}>
                      <a className="text-white">{title}</a>
                    </Link>
                  ))}
                </Space>
              </nav>
            </Space>
          </Col>
          <Col flex="auto" className="d-flex justify-content-end">
            <Space size="middle">
              <Button type="text" shape="round" size="large">
                Sign up
              </Button>
              <Button ghost shape="round" size="large">
                Sign in
              </Button>
            </Space>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export { Header }
