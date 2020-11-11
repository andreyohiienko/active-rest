import React from 'react'
import { Dashboard } from 'HOC'
import { Router, useRouter, withRouter } from 'next/dist/client/router'

const Page = (props: any) => {
  // const router = useRouter()
  // console.log(router)
  console.log('props', props)
  return <Dashboard>Page</Dashboard>
}

export async function getStaticProps({ params }: any) {
  console.log(params)
}

export default withRouter(Page)
