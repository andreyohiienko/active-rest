import React from 'react'
import { PageLayout } from 'components'
import { ActivityNew } from 'layouts'
import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
import { getStaticQuery } from 'utils'

const ACTIVITY = gql`
  query ActivityNew {
    footer {
      title
      desc
      subTitle
    }
  }
`

const ActivityNewPage = () => {
  return (
    <PageLayout title="New Activity" isDarkHeader>
      <ActivityNew />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const initialApolloState = await getStaticQuery(ACTIVITY)

  return { props: { initialApolloState } }
}

export default ActivityNewPage
