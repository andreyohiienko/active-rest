import { Container } from 'components'
import { Button, Carousel, Layout } from 'antd'
import React from 'react'

const Hero = () => {
  const slides = [
    {
      title: 'Find yourself ourside.',
      desc:
        'Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.',
      href: '/',
      bg: 'https://picsum.photos/1920/1080',
    },
    {
      title: 'Discover the nature.',
      desc:
        'Book unique camping experiences on over 300,000 campsites, cabins, RV parks, public parks and more.',
      href: '/',
      bg: 'https://picsum.photos/1920/1080',
    },
  ]

  return (
    <Layout>
      <Carousel effect="fade" draggable autoplay={false} dots={false}>
        {slides.map(({ title, desc, href, bg }) => (
          <div key={title}>
            <div
              className="hero bg-cover"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <Container className="text-center hero__container text-white text-capitalize">
                <h1>{title}</h1>
                <p>{desc}</p>
                <Button href={href} size="large" shape="round" type="primary">
                  Discover
                </Button>
              </Container>
            </div>
          </div>
        ))}
      </Carousel>
    </Layout>
  )
}

export { Hero }
