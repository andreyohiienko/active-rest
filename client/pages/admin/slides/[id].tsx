import { gql, useLazyQuery, useMutation } from '@apollo/client'
import { Button, Col, message, Row, Typography } from 'antd'
import { Container, SelectImage } from 'components'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Slide, SlideVariables, updateSlide, updateSlideVariables } from 'types'

const { Title, Paragraph } = Typography

const SlidePage = () => {
  const SLIDE = gql`
    query Slide($id: ID!) {
      item: slide(id: $id) {
        id
        title
        desc
        image
      }
    }
  `

  const router = useRouter()

  const [getSlide, { error, loading, data }] = useLazyQuery<
    Slide,
    SlideVariables
  >(SLIDE)

  const UPDATE_SLIDE = gql`
    mutation updateSlide(
      $id: ID!
      $title: String
      $desc: String
      $image: String
    ) {
      action: updateSlide(id: $id, title: $title, desc: $desc, image: $image)
    }
  `

  const [
    updateSlide,
    { error: updateError, loading: updateLoading },
  ] = useMutation<updateSlide, updateSlideVariables>(UPDATE_SLIDE)

  const [updatedTitle, setUpdatedTitle] = useState<
    updateSlideVariables['title']
  >()
  const [updatedDesc, setUpdatedDesc] = useState<updateSlideVariables['desc']>()
  const [updatedImage, setUpdatedImage] = useState<
    updateSlideVariables['image']
  >()

  const isUpdated = Boolean(updatedTitle || updatedDesc || updatedImage)

  useEffect(() => {
    if (updateError) {
      message.error(updateError.message)
    }
    if (error) {
      message.error(error)
    }
  }, [updateError, error])

  useEffect(() => {
    if (router?.query?.id && typeof router?.query?.id === 'string') {
      getSlide({
        variables: { id: router?.query.id },
      })

      if (data?.item) {
        const { title, desc, image } = data.item
        setUpdatedTitle(title)
        setUpdatedDesc(desc)
        setUpdatedImage(image)
      }
    }
  }, [router, data])

  function renderContent() {
    if (data) {
      return (
        <>
          <Title editable={{ onChange: setUpdatedTitle }}>{updatedTitle}</Title>
          <Paragraph editable={{ onChange: setUpdatedDesc }}>
            {updatedDesc}
          </Paragraph>
          <SelectImage {...{ image: updatedImage, setUpdatedImage }} />
        </>
      )
    }
    if (loading) {
      return 'Loading...'
    }
  }

  async function onSave() {
    if (updatedTitle && data?.item?.id) {
      await updateSlide({
        variables: {
          id: data.item.id,
          title: updatedTitle,
          desc: updatedDesc,
          image: updatedImage,
        },
      })
    } else {
      message.error("Title can't be empty!")
    }
  }

  return (
    <Dashboard>
      <Container fluid className="pt-10">
        <Row gutter={30}>
          <Col flex="auto">{renderContent()}</Col>
          <Col flex="500px">
            <Button
              disabled={!isUpdated}
              loading={updateLoading}
              type="primary"
              onClick={onSave}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  )
}

export default SlidePage
