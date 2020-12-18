import { gql, useLazyQuery } from '@apollo/client'
import { Image, Typography } from 'antd'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
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
          <Image width={200} src={image || undefined} alt="image" />
        </>
      )
    }
    if (loading) {
      return 'Loading...'
    }
  }

  return (
    <Dashboard>
      <Container fluid>{renderContent()}</Container>
    </Dashboard>
  )
}

export default SlidePage
