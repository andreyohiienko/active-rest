import {
  Button,
  Col,
  Input,
  Layout,
  message,
  Row,
  Space,
  Typography,
} from 'antd'
import { ButtonSave, Container, SwitchVisibility } from 'components'
import React, { useEffect, useState } from 'react'
import { SubmitMail } from 'static'
import { MailOutlined } from '@ant-design/icons'
import { useAdmin } from 'hooks'
import { gql, useMutation, useQuery } from '@apollo/client'
import {
  Approach,
  SaveApproach,
  SaveApproachVariables,
  TriggerApproachVis,
  TriggerApproachVisVariables,
  AddSubscriber,
  AddSubscriberVariables,
} from 'types'
import classNames from 'classnames'

const APPROACH = gql`
  query Approach {
    section: approach {
      isVisible
      title
      desc
    }
  }
`

const SAVE_APPROACH = gql`
  mutation SaveApproach($title: String, $desc: String) {
    saveApproach(input: { title: $title, desc: $desc })
  }
`

const SECTION_VISIBILITY = gql`
  mutation TriggerApproachVis($isVisible: Boolean) {
    triggerApproachVis(isVisible: $isVisible)
  }
`

const SUBSCRIBE = gql`
  mutation AddSubscriber($email: String) {
    addSubscriber(email: $email) {
      id
      email
      status
    }
  }
`

const { Title, Paragraph } = Typography

export const ApproachSection = () => {
  const { data: initialState } = useQuery<Approach>(APPROACH)
  const isAdmin = useAdmin()
  const [title, setTitle] = useState(initialState?.section?.title)
  const [desc, setDesc] = useState(initialState?.section?.desc)
  const [isVisible, setIsVisible] = useState(initialState?.section?.isVisible)

  const [email, setEmail] = useState('')
  const onClick = () => {
    if (email) {
      subscribe({
        variables: {
          email,
        },
      })
      setEmail('')
    }
  }

  const [saveApproach, { data, loading }] = useMutation<
    SaveApproach,
    SaveApproachVariables
  >(SAVE_APPROACH)
  const [
    triggerVisibility,
    { data: triggerData, loading: triggerLoading },
  ] = useMutation<TriggerApproachVis, TriggerApproachVisVariables>(
    SECTION_VISIBILITY,
  )

  const [
    subscribe,
    { data: subsData, loading: subsLoading, error: subsError },
  ] = useMutation<AddSubscriber, AddSubscriberVariables>(SUBSCRIBE)

  useEffect(() => {
    if (data) {
      message.success(data.saveApproach)
    }
  }, [data])

  useEffect(() => {
    if (triggerData) {
      message.success(triggerData.triggerApproachVis)
    }
  }, [triggerData])

  useEffect(() => {
    if (subsData?.addSubscriber?.email) {
      message.success(
        `Thanks for subscription! You will receive our updates on email ${subsData.addSubscriber?.email}!`,
      )
    }
  }, [subsData])

  useEffect(() => {
    if (subsError) {
      message.error(subsError.message.split(': ')[2])
    }
  }, [subsError])

  function renderControls() {
    if (!isAdmin) {
      return <></>
    }

    function onSwitchChange() {
      triggerVisibility({
        variables: {
          isVisible: !isVisible,
        },
      })
      setIsVisible(!isVisible)
    }

    return (
      <Col className="m-10" span={24}>
        <Space align="center" size="large">
          <ButtonSave
            loading={loading}
            onClick={() =>
              saveApproach({
                variables: {
                  title,
                  desc,
                },
              })
            }
          />
          <SwitchVisibility
            loading={loading || triggerLoading}
            checked={isVisible || undefined}
            onChange={() => onSwitchChange()}
          />
        </Space>
      </Col>
    )
  }

  if (!isVisible && !isAdmin) {
    return <></>
  }

  return (
    <Layout
      className={classNames('pb-lg-90 pb-50 mt-lg-75 mt-50', {
        'hidden-section': !isVisible,
      })}
    >
      <Container className="approach">
        <Row
          align="middle"
          className="approach__row rounded bg-cover py-40 py-md-0"
          style={{ backgroundImage: 'url(/images/approach-bg.svg)' }}
        >
          {renderControls()}
          <Col
            md={{ span: 12, push: 12 }}
            className="d-flex justify-content-center w-100 px-15 px-md-0"
          >
            <img
              src="/images/camping.png"
              alt="camping"
              className="py-md-20 mw-100"
            />
          </Col>
          <Col
            md={{ span: 12, pull: 12 }}
            className="d-flex flex-column align-items-center w-100 px-15 mt-40 mt-md-0"
          >
            <div className="approach__wrapper py-md-20 w-100">
              <Title
                level={2}
                editable={
                  isAdmin ? { onChange: (e: string) => setTitle(e) } : false
                }
                className="h2 text-center text-md-left mb-20f mb-md-10f"
              >
                {title}
              </Title>
              <Paragraph
                editable={
                  isAdmin ? { onChange: (e: string) => setDesc(e) } : false
                }
                className="text-center text-md-left mb-20 mb-md-20"
              >
                {desc}
              </Paragraph>
              <Input
                onPressEnter={onClick}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email Address"
                type="email"
                size="large"
                prefix={
                  <MailOutlined
                    style={{
                      fontSize: 22,
                      color: '#8D8D8D',
                      paddingRight: 10,
                      paddingLeft: 15,
                    }}
                  />
                }
                suffix={
                  <Button
                    loading={subsLoading}
                    onClick={onClick}
                    style={{
                      padding: 0,
                      height: 50,
                      width: 50,
                    }}
                    type="primary"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <SubmitMail />
                  </Button>
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
