import { Col, Row, Typography } from 'antd'
import { Container } from '../Container'
import React, { useState } from 'react'
import Link from 'next/link'
import { isEditable } from 'utils'
import { gql, useQuery } from '@apollo/client'
import { Footer } from 'types'

const FOOTER = gql`
  query Footer {
    section: footer {
      title
      desc
      subTitle
    }
  }
`

const { Title, Paragraph } = Typography

const FooterSection = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
  ]

  const { data: initialState } = useQuery<Footer>(FOOTER)

  const [title, setTitle] = useState(initialState?.section?.title)
  const [desc, setDesc] = useState(initialState?.section?.desc)
  const [subTitle, setSubTitle] = useState(initialState?.section?.subTitle)

  return (
    <footer className="mt-90">
      <Container>
        <Row>
          <Col md={12}>
            <Title
              level={5}
              editable={isEditable(setTitle)}
              className="h6 mb-10 pb-10"
            >
              {title}
            </Title>
            <Paragraph
              editable={isEditable(setDesc)}
              className="footer__desc mb-0"
            >
              {desc}
            </Paragraph>
          </Col>
          <Col md={12}>
            <Title
              editable={isEditable(setSubTitle)}
              level={5}
              className="text-capitalize mb-20"
            >
              {subTitle}
            </Title>
            <ul className="list-unstyled text-body">
              {links.map(({ href, title }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="text-center mt-15 pt-45 mb-0">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export { FooterSection }
