import { Carousel, Layout, Typography } from 'antd'
import { Container } from 'components'
import { SelectImage } from 'components/SelectImage/main'
import { useAdmin } from 'hooks'
import React, { FC } from 'react'
import { FetchHomePage } from 'types'
import { serverUrl } from 'utils'
import { useHeroState } from './useHeroState'

const { Title, Paragraph } = Typography

interface Props {
  slides: FetchHomePage['slides']
}

const Hero: FC<Props> = ({ slides }) => {
  const isAdmin = useAdmin()
  const { state, updateTitle, updateDesc, updateImage } = useHeroState(slides)

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
                    <SelectImage id={id} setUpdatedImage={updateImage} />
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
