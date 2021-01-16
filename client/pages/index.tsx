import { gql } from '@apollo/client'
import { PageLayout } from 'components'
import {
  ActivitiesSection,
  ApproachSection,
  HeroSection,
  ServicesSection,
} from 'layouts'
import React from 'react'
import { getStaticQuery } from 'utils'

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
    services {
      isVisible
      services {
        id
        title
        desc
        image
      }
    }
    activities {
      isVisible
      title
    }
    sectionApproach: approach {
      isVisible
      title
      desc
    }
    footer {
      title
      desc
      subTitle
    }
  }
`

const IndexPage = () => {
  return (
    <PageLayout title="Active Rest">
      <HeroSection />
      <ServicesSection />
      <ActivitiesSection />
      <ApproachSection />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const initialApolloState = await getStaticQuery(HOME)

  return {
    props: {
      initialApolloState,
    },
  }
}

export default IndexPage
