import { gql, useLazyQuery } from '@apollo/client'
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

  const [updatedImage, setUpdatedImage] = useState('')

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
          <Title editable>{title}</Title>
          <Paragraph editable>{desc}</Paragraph>
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
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  )
}

export default SlidePage
