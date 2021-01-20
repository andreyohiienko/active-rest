import { gql, useMutation, useQuery } from '@apollo/client'
import {
  Button,
  Col,
  InputNumber,
  Layout,
  message,
  Row,
  Typography,
} from 'antd'
import { ButtonSave, Container } from 'components'
import { useAdmin } from 'hooks'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DefaultErrorPage from 'next/error'
import { placeholder, serverUrl } from 'utils'
import { SelectImage } from 'components/SelectImage/main'
import classNames from 'classnames'

const { Title, Paragraph } = Typography

const ACTIVITY = gql`
  query ActivityPage($slug: String!) {
    activity(slug: $slug) {
      title
      desc
      shortDesc
      image
      price
      likes
    }
  }
`

const SAVE_ACTIVITY = gql`
  mutation SaveActivity($input: SaveActivityInput) {
    saveActivity(input: $input)
  }
`

export const ActivityLayout = () => {
  const { query } = useRouter()
  const { data: initialState } = useQuery(ACTIVITY, {
    variables: { slug: query.slug },
  })

  const isAdmin = useAdmin()
  const [title, setTitle] = useState(initialState?.activity?.title)
  const [shortDesc, setShortDesc] = useState(initialState?.activity?.shortDesc)
  const [desc, setDesc] = useState(initialState?.activity?.desc)
  const [price, setPrice] = useState(initialState?.activity?.price)
  const [image, setImage] = useState(initialState?.activity?.image)

  const [saveActivity, { data, loading }] = useMutation(SAVE_ACTIVITY)

  useEffect(() => {
    if (data) {
      message.success(data?.saveActivity)
    }
  }, [data])

  if (!initialState?.activity) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <Layout className="act">
      <Container>
        <div
          className={classNames('act__hero', {
            'bg-full': image.endsWith('placeholder.png'),
            'bg-cover': !image.endsWith('placeholder.png'),
          })}
          style={{
            backgroundImage: `url('${
              image ? serverUrl + image : placeholder
            }')`,
          }}
        >
          {isAdmin && <SelectImage setImage={setImage} />}
        </div>
        {isAdmin && (
          <ButtonSave
            className="mt-40"
            loading={loading}
            onClick={() =>
              saveActivity({
                variables: {
                  input: {
                    slug: query.slug,
                    title,
                    shortDesc,
                    desc,
                    price,
                    image,
                  },
                },
              })
            }
          />
        )}
        <Row gutter={30} className="mt-50">
          <Col md={{ span: 18 }}>
            <Title
              editable={
                isAdmin ? { onChange: (e: string) => setTitle(e) } : false
              }
              className="h1 act__title"
            >
              {title}
            </Title>
          </Col>
          <Col md={{ span: 6 }} className="text-right">
            <div className="act__price mb-20">
              {isAdmin ? (
                <InputNumber
                  defaultValue={price}
                  formatter={(value) =>
                    `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(displayValue) =>
                    displayValue?.replace(/\$\s?|(,*)/g, '') || ''
                  }
                  onChange={(e) => setPrice(e)}
                />
              ) : (
                `$${price}`
              )}
              /night
            </div>
            <Button size="large" type="primary" shape="round">
              BOOK
            </Button>
          </Col>
        </Row>
        <Paragraph
          editable={
            isAdmin ? { onChange: (e: string) => setShortDesc(e) } : false
          }
        >
          {shortDesc}
        </Paragraph>
        <Paragraph
          editable={isAdmin ? { onChange: (e: string) => setDesc(e) } : false}
        >
          {desc}
        </Paragraph>
      </Container>
    </Layout>
  )
}
