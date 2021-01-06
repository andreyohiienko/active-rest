import { Button, Carousel, Layout, Typography } from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import React, { useState } from 'react'
import { serverUrl } from 'utils'
import { useHeroState } from './useHeroState'

const { Title, Paragraph } = Typography

const Hero = ({ slides }) => {
  // console.log('list', list)
  const isAdmin = useAdmin()
  const { state, updateTitle, updateDesc } = useHeroState(slides)

  return (
    <Layout>
      <Carousel effect="fade" draggable autoplay={false} dots={false}>
        {state.map(({ id, title, desc, image }) => (
          <div key={title}>
            <div
              className="hero bg-cover"
              style={{ backgroundImage: `url('${serverUrl + image}')` }}
            >
              <Container className="text-center hero__container text-white text-capitalize">
                <Title
                  editable={
                    isAdmin ? { onChange: (e) => updateTitle(e, id) } : false
                  }
                  className="h1"
                >
                  {title}
                </Title>
                <Paragraph
                  editable={
                    isAdmin ? { onChange: (e) => updateDesc(e, id) } : false
                  }
                >
                  {desc}
                </Paragraph>
                {/* <Button href={href} size="large" shape="round" type="primary">
                  Discover
                </Button> */}
              </Container>
            </div>
          </div>
        ))}
      </Carousel>
    </Layout>
  )
}

export { Hero }
