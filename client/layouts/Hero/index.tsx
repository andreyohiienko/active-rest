import { Button, Carousel, Layout, Typography } from 'antd'
import { Container } from 'components'
import { useAdmin } from 'hooks'
import React, { FC, useState } from 'react'
import { FetchSlides } from 'types'
import { serverUrl } from 'utils'
import { useHeroState } from './useHeroState'

const { Title, Paragraph } = Typography

const Hero: FC<FetchSlides> = ({ slides }) => {
  // console.log('list', list)
  const isAdmin = useAdmin()
  const { state, updateTitle, updateDesc } = useHeroState(slides)

  return (
    <Layout>
      <Carousel effect="fade" draggable autoplay={false} dots={false}>
        {state?.map((slide) => {
          if (slide) {
            const { id, title, desc, image } = slide

            return (
              <div key={title}>
                <div
                  className="hero bg-cover"
                  style={{ backgroundImage: `url('${serverUrl + image}')` }}
                >
                  <Container className="text-center hero__container text-white text-capitalize">
                    <Title
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateTitle({ updatedTitle: e, slideId: id }),
                            }
                          : false
                      }
                      className="h1"
                    >
                      {title}
                    </Title>
                    <Paragraph
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateDesc({ updatedDesc: e, slideId: id }),
                            }
                          : false
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
            )
          }
        })}
      </Carousel>
    </Layout>
  )
}

export { Hero }
