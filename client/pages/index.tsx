import Axios from 'axios'
import { PageLayout } from 'components'
import { Activities, Approach, Hero, Services } from 'layouts'
import React, { useEffect } from 'react'

const IndexPage = () => {
  useEffect(() => {
    const doRequest = async () => {
      try {
        const { data } = await Axios.get('http://localhost:3000/api')
        console.log('data', data)
      } catch (error) {
        console.log('error', error)
      }
    }
    doRequest()
  }, [])

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
