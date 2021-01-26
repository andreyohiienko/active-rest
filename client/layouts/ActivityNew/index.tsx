import { Button, Col, InputNumber, Layout, Row, Typography } from 'antd'
import { Container } from 'components'
import React, { ComponentType, useEffect, useState } from 'react'
import classNames from 'classnames'
import { useAdmin } from 'hooks'
import { SelectImage } from 'components/SelectImage/main'
import { placeholder, serverUrl } from 'utils'
import { ContentState, convertToRaw, EditorState } from 'draft-js'
import { EditorProps } from 'react-draft-wysiwyg'
import dynamic from 'next/dynamic'
import { gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useCreateActivityMutation } from 'types'

const Editor: ComponentType<EditorProps> = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
)

gql`
  mutation CreateActivity($input: ActivityInput) {
    action: createActivity(input: $input) {
      id
      title
      slug
      desc
      shortDesc
      image
      price
    }
  }
`

const { Title, Paragraph } = Typography

export const ActivityNew = () => {
  const isAdmin = useAdmin()
  const router = useRouter()

  const [title, setTitle] = useState('Title...')
  const [shortDesc, setShortDesc] = useState('Short desription...')
  const [desc, setDesc] = useState(
    EditorState.createWithContent(
      ContentState.createFromText('Description...'),
    ),
  )
  const [price, setPrice] = useState(30)
  const [image, setImage] = useState('images/placeholder.png')

  const [createActivity, { data, loading }] = useCreateActivityMutation()

  async function onCreate() {
    await createActivity({
      variables: {
        input: {
          title,
          desc: JSON.stringify(convertToRaw(desc.getCurrentContent())),
          shortDesc,
          image,
          price,
        },
      },
    })
  }

  useEffect(() => {
    if (data) {
      router.push(`/activity/${data?.action?.slug}`)
    }
  }, [data])

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
                  onChange={(e) => setPrice(Number(e))}
                />
              ) : (
                `$${price}`
              )}
              /night
            </div>
            <Button
              loading={loading}
              onClick={onCreate}
              size="large"
              type="primary"
              shape="round"
            >
              Publish
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
        <Editor
          editorState={desc}
          wrapperClassName="draft-editor__wrapper"
          toolbarClassName="toolbarClassName"
          editorClassName="draft-editor__input"
          onEditorStateChange={(e) => setDesc(e)}
        />
      </Container>
    </Layout>
  )
}
