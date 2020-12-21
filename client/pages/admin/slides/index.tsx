import { DeleteOutlined } from '@ant-design/icons'
import { gql, Reference, useMutation, useQuery } from '@apollo/client'
import { Button, message, Table } from 'antd'
import { Container } from 'components'
import { Dashboard } from 'HOC'
import Link from 'next/link'
import { reject } from 'lodash'
import React, { ReactNode } from 'react'
import { removeSlide, Slides, removeSlideVariables } from 'types'

export const SLIDES = gql`
  query Slides {
    list: slides {
      id
      title
    }
  }
`

const REMOVE_SLIDE = gql`
  mutation removeSlide($id: ID!) {
    action: removeSlide(id: $id) {
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
    title: '',
    dataIndex: 'remove',
    key: 'remove',
  },
]

const SlidesPage = () => {
  const { error, loading, data } = useQuery<Slides>(SLIDES)

  const [removeAction] = useMutation<removeSlide, removeSlideVariables>(
    REMOVE_SLIDE,
    {
      update(cache, { data }) {
        if (data) {
          const { action } = data

          cache.modify({
            fields: {
              slides(existingSlideRefs: Reference[]) {
                const removedSlideRef = cache.writeFragment({
                  data: action,
                  fragment: gql`
                    fragment remove on Slide {
                      id
                    }
                  `,
                })

                return reject(existingSlideRefs, removedSlideRef)
              },
            },
          })
        }
      },
    },
  )

  async function onRemove(id: string) {
    try {
      const { data } = await removeAction({ variables: { id: id } })
      if (data) {
        message.success(`${data?.action?.title} slide removed successfully.`)
      }
    } catch (error) {
      message.error(error)
    }
  }

  function renderSlides() {
    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      console.error('error', error)
    }

    interface DataSource {
      title: ReactNode
      remove: ReactNode
      key: string
    }

    const dataSource = data?.list?.reduce<DataSource[]>((prev, curr) => {
      if (curr) {
        const { title, id } = curr
        return [
          ...prev,
          {
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
          },
        ]
      }
      return prev
    }, [])

    return <Table {...{ columns, dataSource }} />
  }

  return (
    <Dashboard>
      <Container fluid>
        <div className="mb-30">
          <Link href="/admin/slides/new">
            <Button type="primary">Add Slide</Button>
          </Link>
        </div>
        {renderSlides()}
      </Container>
    </Dashboard>
  )
}

export default SlidesPage
