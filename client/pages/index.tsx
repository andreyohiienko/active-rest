import Axios from 'axios'
import { PageLayout } from 'components'
import { Activities, Approach, Hero, Services } from 'layouts'
import React, { useEffect } from 'react'

const IndexPage = () => {
  return (
    <PageLayout title="Active Rest">
      <Hero />
      <Services />
      <Activities />
      <Approach />
    </PageLayout>
  )
}

export default IndexPage
