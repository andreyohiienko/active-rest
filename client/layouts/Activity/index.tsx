import { gql } from '@apollo/client'
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
import React, { ComponentType, useEffect, useState } from 'react'
import DefaultErrorPage from 'next/error'
import { placeholder } from 'utils'
import { SelectImage } from 'components/SelectImage/main'
import classNames from 'classnames'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import Link from 'next/link'
import { PlusOutlined } from '@ant-design/icons'
import { useActivityPageQuery, useSaveActivityMutation } from 'types'

const Editor: ComponentType<EditorProps> = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
)

const { Title, Paragraph } = Typography

gql`
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

gql`
  mutation SaveActivity($input: SaveActivityInput) {
    saveActivity(input: $input)
  }
`

export const ActivityLayout = () => {
  const { query } = useRouter()
  const slug = Array.isArray(query.slug) ? query.slug[0] : query.slug
  const { data: initialState } = useActivityPageQuery({
    variables: { slug },
  })

  const isAdmin = useAdmin()
  const [title, setTitle] = useState(initialState?.activity?.title)
  const [shortDesc, setShortDesc] = useState(initialState?.activity?.shortDesc)
  const [desc, setDesc] = useState(
    EditorState.createWithContent(
      convertFromRaw(JSON.parse(initialState?.activity?.desc || '')),
    ),
  )
  const [price, setPrice] = useState(initialState?.activity?.price)
  const [image, setImage] = useState(initialState?.activity?.image)

  const [saveActivity, { data, loading }] = useSaveActivityMutation()

  useEffect(() => {
    if (data) {
      message.success(data?.saveActivity)
    }
  }, [data])

  if (!initialState?.activity) {
    return <DefaultErrorPage statusCode={404} />
  }

  function renderContent() {
    if (isAdmin) {
      return (
        <>
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
          <div className="text-center">
            <Link href="/activity/new">
              <a className="ant-btn ant-btn-primary mt-20">
                <PlusOutlined />
                <span className="ml-10">Add activity</span>
              </a>
            </Link>
          </div>
        </>
      )
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: draftToHtml(convertToRaw(desc.getCurrentContent())),
        }}
      ></div>
    )
  }

  return (
    <Layout className="act">
      <Container>
        <div
          className={classNames('act__hero', {
            'bg-full': image?.endsWith('placeholder.png'),
            'bg-cover': !image?.endsWith('placeholder.png'),
          })}
          style={{
            backgroundImage: `url('${image ? image : placeholder}')`,
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
                    slug,
                    title,
                    shortDesc,
                    desc: JSON.stringify(
                      convertToRaw(desc.getCurrentContent()),
                    ),
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
                  defaultValue={price ? price : 0}
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
            <Button size="large" type="primary" shape="round">
              BOOK
            </Button>
          </Col>
        </Row>
        <div className="act__wrapper">{renderContent()}</div>
      </Container>
    </Layout>
  )
}
