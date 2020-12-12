import React, { ComponentType } from 'react'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/dist/client/router'
import { gql, useQuery } from '@apollo/client'
import { Col, Row, Typography } from 'antd'
import dynamic from 'next/dynamic'
import { Container } from 'components'
const Editor: ComponentType = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
)

const { Title } = Typography

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
      <Container fluid>
        <Row gutter={30}>
          <Col flex="auto">
            <Title>{data?.page.title}</Title>
            <Editor />
          </Col>
          <Col flex="300px"></Col>
        </Row>
      </Container>
    </Dashboard>
  )
}

export default Page
