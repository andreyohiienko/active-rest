import React, { useEffect } from 'react'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/dist/client/router'
import { gql, useQuery } from '@apollo/client'

const Page = () => {
  const router = useRouter()

  const PAGE = gql`
    query Page($id: ID!) {
      page(id: $id) {
        id
        title
      }
    }
  `

  const { error, loading, data } = useQuery(PAGE, {
    variables: { id: router?.query.id },
  })

  return (
    <Dashboard>
      <h1>{data?.page.title}</h1>
      <p>{error?.message}</p>
    </Dashboard>
  )
}

export default Page
