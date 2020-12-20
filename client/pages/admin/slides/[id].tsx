import { gql, useLazyQuery, useMutation } from '@apollo/client'
import { Button, Col, Row, Typography } from 'antd'
import { Container, SelectImage } from 'components'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Slide, SlideVariables } from 'types'

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

  const [updateSlide, { loading: updateLoading }] = useMutation(UPDATE_SLIDE)

  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedDesc, setUpdatedDesc] = useState('')
  const [updatedImage, setUpdatedImage] = useState('')

  const isUpdated = Boolean(updatedTitle || updatedDesc || updatedImage)

  useEffect(() => {
    if (router?.query?.id && typeof router?.query?.id === 'string') {
      getSlide({
        variables: { id: router?.query.id },
      })
    }
  }, [router])

  function renderContent() {
    if (data?.item) {
      const {
        item: { title, desc, image },
      } = data
      return (
        <>
          <Title editable={{ onChange: setUpdatedTitle }}>
            {updatedTitle || title}
          </Title>
          <Paragraph editable={{ onChange: setUpdatedDesc }}>
            {updatedDesc || desc}
          </Paragraph>
          <SelectImage {...{ image: updatedImage || image, setUpdatedImage }} />
        </>
      )
    }
    if (loading) {
      return 'Loading...'
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
              onClick={() =>
                updateSlide({
                  variables: {
                    id: data?.item?.id,
                    title: updatedTitle,
                    desc: updatedDesc,
                    image: updatedImage,
                  },
                })
              }
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
