import { gql } from '@apollo/client'
import { PageLayout } from 'components'
import { Activities, Approach, Hero, Services } from 'layouts'
import React from 'react'
import { initializeApollo } from 'apollo'

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

const IndexPage = ({ slides }) => {
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
