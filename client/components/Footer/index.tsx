import { Col, message, Row, Typography } from 'antd'
import { Container } from '../Container'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { isEditable } from 'utils'
import { gql } from '@apollo/client'
import { useFooterQuery, useSaveFooterMutation } from 'types'
import { useAdmin } from 'hooks'
import { ButtonSave } from 'components/Buttons'

gql`
  query Footer {
    section: footer {
      title
      desc
      subTitle
    }
  }
`

gql`
  mutation SaveFooter($title: String, $desc: String, $subTitle: String) {
    saveFooter(input: { title: $title, desc: $desc, subTitle: $subTitle })
  }
`

const { Title, Paragraph } = Typography

const FooterSection = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About' },
  ]

  const { data: initialState } = useFooterQuery()

  const isAdmin = useAdmin()
  const [title, setTitle] = useState(initialState?.section?.title)
  const [desc, setDesc] = useState(initialState?.section?.desc)
  const [subTitle, setSubTitle] = useState(initialState?.section?.subTitle)

  const [saveFooter, { data, loading }] = useSaveFooterMutation()

  useEffect(() => {
    if (data) {
      message.success(data.saveFooter)
    }
  }, [data])

  function renderControls() {
    if (!isAdmin) {
      return <></>
    }

    return (
      <ButtonSave
        className="mb-20"
        loading={loading}
        onClick={() =>
          saveFooter({
            variables: {
              title,
              desc,
              subTitle,
            },
          })
        }
      />
    )
  }

  return (
    <footer className="mt-90">
      <Container>
        {renderControls()}
        <Row>
          <Col md={12}>
            <Title
              level={5}
              editable={isEditable(setTitle)}
              className="h6 mb-10 pb-10"
            >
              {title}
            </Title>
            <Paragraph
              editable={isEditable(setDesc)}
              className="footer__desc mb-0"
            >
              {desc}
            </Paragraph>
          </Col>
          <Col md={12}>
            <Title
              editable={isEditable(setSubTitle)}
              level={5}
              className="text-capitalize mb-20"
            >
              {subTitle}
            </Title>
            <ul className="list-unstyled text-body">
              {links.map(({ href, title }) => (
                <li key={title}>
                  <Link href={href}>{title}</Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <p className="text-center mt-15 pt-45 mb-0">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export { FooterSection }
