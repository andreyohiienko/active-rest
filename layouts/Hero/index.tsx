import { Container } from 'components'
import { Button, Layout } from 'antd'
import React from 'react'

const Hero = () => {
  return (
    <Layout
      className="hero bg-cover"
      style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)' }}
    >
      <Container className="text-center hero__container text-white text-capitalize">
        <h1>Find yourself ourside.</h1>
        <p>
          Book unique camping experiences on over 300,000 campsites, cabins, RV
          parks, public parks and more.
        </p>
        <Button href="/" size="large" shape="round" type="primary">
          Discover
        </Button>
      </Container>
    </Layout>
  )
}

export { Hero }
