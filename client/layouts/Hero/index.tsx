import { gql, useMutation } from '@apollo/client'
import { Carousel, Layout, message, Typography } from 'antd'
import { ButtonSave, Container } from 'components'
import { SelectImage } from 'components/SelectImage/main'
import { useAdmin } from 'hooks'
import { omit } from 'lodash'
import React, { FC, useEffect } from 'react'
import { FetchHomePage, SaveSlides, SaveSlidesVariables } from 'types'
import { serverUrl } from 'utils'
import { useHeroState } from './useHeroState'

const SAVE_HERO = gql`
  mutation SaveSlides($slides: [SlideInput]) {
    saveSlides(input: { slides: $slides })
  }
`

const { Title, Paragraph } = Typography

interface Props {
  hero: FetchHomePage['hero']
}

const Hero: FC<Props> = ({ hero }) => {
  const isAdmin = useAdmin()
  const { state, updateTitle, updateDesc, updateImage } = useHeroState(
    hero?.slides || null,
  )

  const [saveSection, { data, loading }] = useMutation<
    SaveSlides,
    SaveSlidesVariables
  >(SAVE_HERO)

  useEffect(() => {
    if (data) {
      message.success(data.saveSlides)
    }
  }, [data])

  function renderSaveButton() {
    if (!isAdmin) {
      return <></>
    }

    return (
      <div className="position-absolute z-1">
        <ButtonSave
          loading={loading}
          onClick={() =>
            saveSection({
              variables: {
                slides: state?.map((slide) => omit(slide, ['id'])),
              },
            })
          }
        />
      </div>
    )
  }

  return (
    <Layout>
      {renderSaveButton()}
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
                  <Container className="text-center hero__container text-white">
                    <Title
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateTitle({ updatedTitle: e, slideId: id }),
                            }
                          : false
                      }
                      className="h1 text-capitalize"
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
