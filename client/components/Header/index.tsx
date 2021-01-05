import { Button, Col, Row, Space, Grid, Menu, Dropdown, Divider } from 'antd'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Container } from 'components'
import { Logo } from 'static'
import { gql, useApolloClient, useLazyQuery } from '@apollo/client'

const { useBreakpoint } = Grid

const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      name
      googleId
      role
      email
    }
  }
`

const SIGNOUT = gql`
  query Logout {
    signout {
      message
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

  const [fetchUser, { data }] = useLazyQuery(CURRENT_USER, {
    nextFetchPolicy: 'cache-only',
  })

  useEffect(() => {
    fetchUser()
  }, [])

  const [signout] = useLazyQuery(SIGNOUT)
  const client = useApolloClient()

  async function onSignout() {
    signout()
    client.cache.evict({
      id: 'ROOT_QUERY',
      fieldName: 'currentUser',
      broadcast: true,
    })
    client.cache.gc()
  }

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

  function renderNav() {
    if (screens.md) {
      if (!data?.currentUser) {
        return (
          <Space size="middle">
            <Button type="text" shape="round" size="large">
              Sign up
            </Button>
            <Link href="/auth/google">Sign in</Link>
          </Space>
        )
      } else {
        return (
          <Space size="middle">
            <p className="mb-0">{data?.currentUser?.name}</p>
            <Button
              onClick={onSignout}
              type="primary"
              shape="round"
              size="large"
            >
              Sign Out
            </Button>
          </Space>
        )
      }
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
