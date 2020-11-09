import { Button, Card, Col, Layout, Row } from 'antd'
import { Container } from 'components'
import React from 'react'
import { ActivitiesSign } from 'static'

export const Activities = () => {
  const activities = [
    {
      image: 'https://picsum.photos/277/180',
      title: 'Trickle Creek Ranch',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Dragonfly Tiny Cabin',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Tiny Cabin in the mountains',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'The Stuga',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Luxury Tiny Beach Cabin',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'The Summit Cabin',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Kindred Spirits Cabin',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'The Hermitage Cabin',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Red Lifeguard Stand',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'The Tree House',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Barrier island elevated tent',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
    {
      image: 'https://picsum.photos/277/180',
      title: 'Ninovan on the Shore',
      desc: 'Book unique camping experiences on over 300,000 campsites.',
      price: 36,
    },
  ]

  return (
    <Layout className="mt-lg-75 mt-50 pb-lg-75 pb-50">
      <Container className="text-center">
        <ActivitiesSign />
        <h2 className="mt-40 mb-45">Explore Destinations & Activities</h2>
        <Row gutter={30}>
          {activities.map(({ image, title, desc, price }) => (
            <Col
              key={title}
              lg={6}
              sm={12}
              className="w-100 d-flex align-items-stretch py-15"
            >
              <Card
                bordered={false}
                key={title}
                className="act-card w-100"
                cover={<img className="act-card__image" src={image} />}
              >
                <p className="act-card__price text-center f-weight-500">
                  ${price}/night
                </p>
                <h3 className="mb-10">{title}</h3>
                <p className="mb-10 pb-15">{desc}</p>
                <Button href="/" shape="round" size="large" type="default">
                  Read More
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
        <Button
          href="/"
          className="mt-45"
          shape="round"
          size="large"
          type="primary"
          ghost
        >
          View all
        </Button>
      </Container>
    </Layout>
  )
}