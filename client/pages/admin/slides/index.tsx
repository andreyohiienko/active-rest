import { gql, useQuery } from '@apollo/client'
import { Button, Table } from 'antd'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import Link from 'next/link'
import React from 'react'

const SLIDES = gql`
  query Query {
    slides {
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

interface Slides {
  slides: Slide[]
}

interface Slide {
  id: string
  title: string
}

const Pages = () => {
  const { error, loading, data } = useQuery<Slides>(SLIDES)

  console.log('data', data)

  function renderPages() {
    const dataSource = data?.slides?.map(({ title, id }) => ({
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

  return (
    <Dashboard>
      <Container fluid>
        <div className="mb-30">
          <Button type="primary">Add Slide</Button>
        </div>
        {renderPages()}
      </Container>
    </Dashboard>
  )
}

export default Pages
