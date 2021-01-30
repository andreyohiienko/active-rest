import { gql } from '@apollo/client'
import { PageLayout } from 'components'
import { ActivityLayout } from 'layouts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useActivityPageQuery } from 'types'
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
  const { query } = useRouter()
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug
  const { data } = useActivityPageQuery({
    variables: { slug },
  })
  return (
    <PageLayout title={data?.activity?.title} isDarkHeader>
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
