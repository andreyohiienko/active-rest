import { gql, useQuery } from '@apollo/client'
import { Image, Typography } from 'antd'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const { Title, Paragraph } = Typography

const Slide = () => {
  const router = useRouter()

  const SLIDE = gql`
    query Slide($id: ID!) {
      slide(id: $id) {
        id
        title
        desc
        image
      }
    }
  `

  const { error, loading, data } = useQuery(SLIDE, {
    variables: { id: router?.query.id },
  })

  function renderContent(data) {
    if (data) {
      const {
        slide: { title, desc, image },
      } = data
      return (
        <>
          <Title editable>{title}</Title>
          <Paragraph editable>{desc}</Paragraph>
          <Image width={200} src={image} alt="image" />
        </>
      )
    }

    if (loading) {
      return 'Loading...'
    }
  }

  return (
    <Dashboard>
      <Container fluid>{renderContent(data)}</Container>
    </Dashboard>
  )
}

export default Slide
