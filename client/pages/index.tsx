import { gql } from '@apollo/client'
import { PageLayout } from 'components'
import { Activities, Approach, Hero, Services } from 'layouts'
import React, { FC } from 'react'
import { initializeApollo } from 'apollo'
import { FetchSlides } from 'types'

const SLIDES = gql`
  query FetchSlides {
    slides {
      id
      title
      desc
      image
    }
  }
`

const IndexPage: FC<FetchSlides> = ({ slides }) => {
  return (
    <PageLayout title="Active Rest">
      <Hero {...{ slides }} />
      <Services />
      <Activities />
      <Approach />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const client = initializeApollo()
  const { data } = await client.query({ query: SLIDES })

  return {
    props: { ...data },
  }
}

export default IndexPage
