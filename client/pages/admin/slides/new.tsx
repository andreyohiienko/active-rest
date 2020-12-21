import { gql, useMutation } from '@apollo/client'
import { Button, Col, message, Row, Typography } from 'antd'
import { Container, SelectImage } from 'components'
import { Dashboard } from 'HOC'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const ADD_SLIDE = gql`
  mutation AddSlide($title: String, $desc: String, $image: String) {
    action: addSlide(title: $title, desc: $desc, image: $image) {
      id
    }
  }
`

const NewSlide = () => {
  const { Title, Paragraph } = Typography

  const router = useRouter()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')

  const isUpdated = Boolean(title || desc || image)

  const [addSlide, { loading }] = useMutation(ADD_SLIDE)

  async function onSave() {
    try {
      const { data } = await addSlide({
        variables: {
          title,
          desc,
          image,
        },
      })

      console.log('data', data)

      router.push(`/admin/slides/${data.action.id}`)
    } catch (err) {
      message.error(err?.message)
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
