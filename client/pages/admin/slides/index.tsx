import { DeleteOutlined } from '@ant-design/icons'
import { gql, useMutation, useQuery } from '@apollo/client'
import { Button, message, Table } from 'antd'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import Link from 'next/link'
import { filter, reject, without } from 'lodash'
import React from 'react'

const SLIDES = gql`
  query Query {
    slides {
      id
      title
    }
  }
`

const REMOVE_SLIDE = gql`
  mutation removeSlide($id: ID!) {
    removeSlide(id: $id) {
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
  {
    title: 'Remove',
    dataIndex: 'remove',
    key: 'remove',
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

  const [removeSlide] = useMutation(REMOVE_SLIDE, {
    update(cache, { data: { removeSlide } }) {
      cache.modify({
        fields: {
          slides(existingSlideRefs) {
            const removedSlideRef = cache.writeFragment({
              data: removeSlide,
              fragment: gql`
                fragment removeSlide on removeSlide {
                  id
                }
              `,
            })

            return reject(existingSlideRefs, removedSlideRef)
          },
        },
      })
    },
  })

  async function onRemove(id: string) {
    try {
      const {
        data: { title },
      } = await removeSlide({
        variables: {
          id,
        },
      })

      message.success(`${title} slide removed successfully.`)
    } catch (error) {
      message.error(error)
    }
  }

  function renderPages() {
    const dataSource = data?.slides?.map(({ title, id }) => ({
      title: (
        <Link key={id} href={`/admin/slides/${id}`}>
          <a>{title}</a>
        </Link>
      ),
      remove: (
        <Button onClick={() => onRemove(id)} shape="circle">
          <DeleteOutlined />
        </Button>
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
