import { PageLayout } from 'components'
import { ActivityLayout } from 'layouts/Activity'
import React from 'react'

const ActivityPage = () => {
  return (
    <PageLayout isDarkHeader>
      <ActivityLayout />
    </PageLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  if (slug !== 'slug') {
    return { notFound: true }
  }

  return { props: {} }
}

export default ActivityPage
