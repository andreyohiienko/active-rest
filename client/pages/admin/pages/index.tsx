import { gql, useQuery } from '@apollo/client'
import { Table } from 'antd'
import { Dashboard } from 'HOC'
import Link from 'next/link'
import React from 'react'

const PAGES = gql`
  query Pages {
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

const Pages = () => {
  function renderPages() {
    const { loading, data } = useQuery(PAGES)
    const dataSource =
      data &&
      data.pages.map(({ title, id }: { title: string; id: string }) => ({
        title: (
          <Link href={`/admin/pages/${id}`}>
            <a>{title}</a>
          </Link>
        ),
      }))

    if (!loading || data) {
      return <Table {...{ columns, dataSource }}></Table>
    }
  }

  return <Dashboard>{renderPages()}</Dashboard>
}

// export async function getStaticProps() {}

export default Pages
