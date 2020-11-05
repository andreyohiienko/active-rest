import { Col, Row } from 'antd'
import { Container } from '../Container'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export { Footer }
