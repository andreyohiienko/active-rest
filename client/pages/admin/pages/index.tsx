import { gql, useQuery } from '@apollo/client'
import { Table } from 'antd'
import { Dashboard } from 'HOC'
import Link from 'next/link'
import React from 'react'

const PAGES = gql`
  query Query {
    pages {
      id
      title
    }
  }
`

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
]

interface Pages {
  pages: Page[]
}

interface Page {
  title: string
  id: string
}

const Pages = () => {
  const { error, loading, data } = useQuery<Pages>(PAGES)

  function renderPages() {
    const dataSource = data?.pages.map(({ title, id }) => ({
      title: (
        <Link key={id} href={`/admin/pages/${id}`}>
          <a>{title}</a>
        </Link>
      ),
      key: id,
    }))

    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      console.error('error', error)
    }

    if (data) {
      return <Table {...{ columns, dataSource }}></Table>
    }
  }

  return <Dashboard>{renderPages()}</Dashboard>
}

export default Pages
