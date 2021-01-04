import { Button, Carousel, Layout, Typography } from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import React, { useState } from 'react'

const { Title, Paragraph } = Typography

const Hero = () => {
  const isAdmin = useAdmin()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const slides = [
    {
      title: 'Find yourself outside.',
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
                <Title
                  editable={isAdmin ? { onChange: setTitle } : false}
                  className="h1"
                >
                  {title}
                </Title>
                <Paragraph editable={isAdmin ? { onChange: setDesc } : false}>
                  {desc}
                </Paragraph>
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
