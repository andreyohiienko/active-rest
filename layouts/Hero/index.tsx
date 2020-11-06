import { Container } from 'components'
import { Button, Layout, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const Hero = () => {
  return (
    <Layout
      className="hero bg-cover"
      style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
    >
      <Container className="text-center hero__container text-white text-capitalize">
        <Title>Find yourself ourside.</Title>
        <p>
          Book unique camping experiences on over 300,000 campsites, cabins, RV
          parks, public parks and more.
        </p>
        <Button size="large" shape="round" type="primary">
          Discover
        </Button>
      </Container>
    </Layout>
  )
}

export { Hero }
