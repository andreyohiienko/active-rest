import { gql, useMutation } from '@apollo/client'
import { Button, Col, Row, Typography } from 'antd'
import { Container, SelectImage } from 'components'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AddSlide } from 'types'
import { SLIDES } from './index'

const ADD_SLIDE = gql`
  mutation AddSlide($title: String!, $desc: String, $image: String) {
    action: addSlide(title: $title, desc: $desc, image: $image) {
      id
    }
  }
`

const NewSlide = () => {
  const { Title, Paragraph } = Typography

  const router = useRouter()

  const [title, setTitle] = useState<string>()
  const [desc, setDesc] = useState<string>()
  const [image, setImage] = useState<string>()

  const isUpdated = Boolean(title || desc || image)

  const [addSlide, { loading }] = useMutation<AddSlide>(ADD_SLIDE)

  async function onSave() {
    try {
      const { data } = await addSlide({
        variables: {
          title,
          desc,
          image,
        },
        refetchQueries: [{ query: SLIDES }],
      })

      router.push(`/admin/slides/${data?.action?.id}`)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Dashboard>
      <Container fluid>
        <Row gutter={30}>
          <Col flex="auto">
            <Title editable={{ onChange: setTitle }}>{title}</Title>
            <Paragraph editable={{ onChange: setDesc }}>{desc}</Paragraph>
            <SelectImage {...{ image: image, setUpdatedImage: setImage }} />
          </Col>
          <Col flex="500px">
            <Button
              loading={loading}
              onClick={onSave}
              disabled={!isUpdated}
              type="primary"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </Dashboard>
  )
}

export default NewSlide
