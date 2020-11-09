import { Col, Row } from 'antd'
import { Container } from '../Container'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
  ]
  return (
    <footer className="mt-90">
      <Container>
        <Row>
          <Col md={12}>
            <h6 className="mb-10 pb-10">
              Hipcamp is everywhere you want to camp.
            </h6>
            <p className="footer__desc mb-0">
              Discover unique experiences on ranches, nature preserves, farms,
              vineyards, and public campgrounds across the U.S. Book tent
              camping, treehouses, cabins, yurts, primitive backcountry sites,
              car camping, airstreams, tiny houses, RV camping, glamping tents
              and more.
            </p>
          </Col>
          <Col md={12}>
            <h6 className="text-capitalize mb-10 pb-10">Get to know us</h6>
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
