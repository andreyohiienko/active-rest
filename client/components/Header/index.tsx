import { Button, Col, Row, Space, Grid, Menu, Dropdown, Divider } from 'antd'
import Link from 'next/link'
import React from 'react'
import { Container } from 'components'
import { Logo } from 'static'
import { gql, useMutation } from '@apollo/client'

const { useBreakpoint } = Grid

const SIGN_UP = gql`
  mutation signUp {
    action: signUp {
      id
    }
  }
`

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

  const auth = [
    {
      href: '/',
      title: 'Sign up',
    },
    {
      href: '/',
      title: 'Sign in',
    },
  ]

  const mobileMenu = (
    <Menu className="dropdown-menu">
      {links.map(({ href, title }) => (
        <Menu.Item key={title}>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </Menu.Item>
      ))}
      <Divider className="dropdown-menu-divider"></Divider>
      {auth.map(({ href, title }) => (
        <Menu.Item key={title}>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  const screens = useBreakpoint()

  const [signup] = useMutation(SIGN_UP)

  function renderNav() {
    if (screens.md) {
      return (
        <Space size="middle">
          <Button
            onClick={() => signup()}
            type="text"
            shape="round"
            size="large"
          >
            Sign up
          </Button>
          <Button ghost shape="round" size="large" href="/">
            Sign in
          </Button>
        </Space>
      )
    }

    return (
      <Dropdown trigger={['click']} overlay={mobileMenu}>
        <Button className="hamburger">
          <span></span>
        </Button>
      </Dropdown>
    )
  }

  return (
    <header className="header position-absolute w-100 text-white">
      <Container>
        <Row>
          <Col md="18">
            <Space size="middle">
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
              {screens.md && (
                <nav>
                  <Space size="middle">
                    {links.map(({ href, title }) => (
                      <Link key={title} href={href}>
                        <a className="text-white">{title}</a>
                      </Link>
                    ))}
                  </Space>
                </nav>
              )}
            </Space>
          </Col>
          <Col flex="auto" className="d-flex justify-content-end">
            {renderNav()}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export { Header }
