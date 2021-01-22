import { gql, useApolloClient } from '@apollo/client'
import { PageLayout } from 'components'
import { ActivityLayout } from 'layouts/Activity'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getStaticQuery } from 'utils'

const ACTIVITY = gql`
  query Activity($slug: String!) {
    activity(slug: $slug) {
      title
      desc
      shortDesc
      image
      price
      likes
    }
    footer {
      title
      desc
      subTitle
    }
  }
`

const ActivityPage = () => {
  const client = useApolloClient()

  console.log('client.cache.data.data', client.cache.data.data)
  return (
    <PageLayout isDarkHeader>
      <ActivityLayout />
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const initialApolloState = await getStaticQuery(ACTIVITY, {
    slug: params?.slug,
  })

  return { props: { initialApolloState } }
}

export default ActivityPage
