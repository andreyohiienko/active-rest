import { Col, Row, Typography } from 'antd'
import { Container } from '../Container'
import React, { useState } from 'react'
import Link from 'next/link'
import { isEditable } from 'utils'
import { gql, useApolloClient, useQuery } from '@apollo/client'
import { FOOTER } from 'gql'
import { initializeApollo } from 'apollo'

const { Title, Paragraph } = Typography

const Footer = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
  ]

  const [title, setTitle] = useState('Hipcamp is everywhere you want to camp.')
  const [desc, setDesc] = useState(
    ' Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more. ',
  )
  const [subTitle, setSubTitle] = useState('Get to know us')

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

export { Footer }
