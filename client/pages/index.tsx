import { gql } from '@apollo/client'
import { PageLayout } from 'components'
import { Activities, Approach, Hero, Services } from 'layouts'
import React, { FC } from 'react'
import { initializeApollo } from 'apollo'
import { FetchHomePage } from 'types'

const HOME = gql`
  query FetchHomePage {
    hero {
      slides {
        id
        title
        desc
        image
      }
    }
    sectionServices: services {
      isVisible
      services {
        id
        title
        desc
        image
      }
    }
    sectionActivities: activities {
      isVisible
      title
    }
    sectionApproach: approach {
      isVisible
      title
      desc
    }
  }
`

const IndexPage: FC<FetchHomePage> = ({
  hero,
  sectionServices,
  sectionActivities,
  sectionApproach,
}) => {
  return (
    <PageLayout title="Active Rest">
      <Hero {...{ hero }} />
      <Services {...{ sectionServices }} />
      <Activities {...{ sectionActivities }} />
      <Approach {...{ sectionApproach }} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const client = initializeApollo()
  const { data } = await client.query({ query: HOME })

  return {
    props: { ...data },
  }
}

export default IndexPage
