import { PlusOutlined } from '@ant-design/icons'
import { gql } from '@apollo/client'
import { Button, Carousel, Layout, message, Space, Typography } from 'antd'
import { ButtonDelete, ButtonSave, Container } from 'components'
import { SelectImage } from 'components/SelectImage/main'
import { useAdmin } from 'hooks'
import { omit } from 'lodash'
import React, { useEffect, useRef } from 'react'
import { useHeroQuery, useSaveSlidesMutation } from 'types'
import { useHeroState } from './useHeroState'

gql`
  query Hero {
    section: hero {
      slides {
        id
        title
        desc
        image
      }
    }
  }
`

gql`
  mutation SaveSlides($slides: [SlideInput]) {
    saveSlides(input: { slides: $slides })
  }
`

const { Title, Paragraph } = Typography

const HeroSection = () => {
  const { data: initialState } = useHeroQuery()
  const isAdmin = useAdmin()
  const {
    state,
    updateTitle,
    updateDesc,
    updateImage,
    removeSlide,
    createSlide,
  } = useHeroState(initialState?.section?.slides || null)
  const ref = useRef<Carousel>(null)

  const [saveSection, { data, loading }] = useSaveSlidesMutation()

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

  function renderRemoveButton(id: string) {
    if (!isAdmin) {
      return <></>
    }

    return (
      <ButtonDelete
        className="position-absolute pos-right-top z-1"
        onClick={() => removeSlide({ id })}
      />
    )
  }

  function renderAddMoreButton() {
    if (!isAdmin) {
      return <></>
    }

    function onClick() {
      createSlide()
      if (state) {
        ref.current?.goTo(state.length)
      }
    }

    return (
      <Button onClick={onClick} type="primary" icon={<PlusOutlined />}>
        Add Slide
      </Button>
    )
  }

  return (
    <Layout>
      {renderSaveButton()}
      <Carousel
        ref={ref}
        effect="fade"
        draggable
        autoplay={!isAdmin}
        dots={false}
      >
        {state?.map((slide) => {
          if (slide) {
            const { id, title, desc, image } = slide

            return (
              <div key={title}>
                <div
                  className="hero bg-cover"
                  style={{ backgroundImage: `url('${image}')` }}
                >
                  <Container className="text-center hero__container text-white">
                    {renderRemoveButton(id)}
                    <Title
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateTitle({ updatedTitle: e, id }),
                            }
                          : false
                      }
                      className="h1 text-capitalize mb-40f"
                    >
                      {title}
                    </Title>
                    <Paragraph
                      editable={
                        isAdmin
                          ? {
                              onChange: (e) =>
                                updateDesc({ updatedDesc: e, id }),
                            }
                          : false
                      }
                    >
                      {desc}
                    </Paragraph>
                    <Space direction="vertical" size="large">
                      <SelectImage id={id} setUpdatedImage={updateImage} />
                      {renderAddMoreButton()}
                    </Space>
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

export { HeroSection }
