import { gql, Reference } from '@apollo/client'
import {
  Button,
  Card,
  Col,
  Layout,
  message,
  Row,
  Space,
  Typography,
} from 'antd'
import {
  ButtonSave,
  ButtonDelete,
  Container,
  SwitchVisibility,
} from 'components'
import { useAdmin } from 'hooks'
import React, { useEffect, useState } from 'react'
import { ActivitiesSign } from 'static'
import {
  useActivitiesQuery,
  useDeleteActivityMutation,
  useSaveActivitiesMutation,
  useTriggerActivitiesVisMutation,
} from 'types'
import classNames from 'classnames'
import Link from 'next/link'
import { PlusOutlined } from '@ant-design/icons'
import { placeholder } from 'utils'

gql`
  query Activities {
    section: activities {
      isVisible
      title
      activities {
        id
        title
        shortDesc
        price
        image
        slug
      }
    }
  }
`

gql`
  mutation SaveActivities($title: String!) {
    saveActivities(input: { title: $title })
  }
`

gql`
  mutation DeleteActivity($id: ID!) {
    deleteActivity(id: $id) {
      id
      title
    }
  }
`

gql`
  mutation TriggerActivitiesVis($isVisible: Boolean) {
    triggerActivitiesVis(isVisible: $isVisible)
  }
`

const { Title } = Typography

export const ActivitiesSection = () => {
  const { data: initialState } = useActivitiesQuery()
  const [title, setTitle] = useState(initialState?.section?.title)
  const isAdmin = useAdmin()
  const [isVisible, setIsVisible] = useState(initialState?.section?.isVisible)
  const [saveActivities, { data, loading }] = useSaveActivitiesMutation()
  const [
    deleteActivity,
    { data: dataDelete, loading: loadingDelete },
  ] = useDeleteActivityMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          activities(existingActivityRefs: { activities: [Reference] }) {
            const deleteActivity = cache.writeFragment({
              data: data?.deleteActivity,
              fragment: gql`
                fragment deleteActivity on Activity {
                  id
                }
              `,
            })

            return {
              ...existingActivityRefs,
              activities: existingActivityRefs?.activities?.filter(
                (activityRef: Reference) =>
                  activityRef?.__ref !== deleteActivity?.__ref,
              ),
            }
          },
        },
      })
    },
  })
  const [
    triggerVisibility,
    { data: triggerData, loading: triggerLoading },
  ] = useTriggerActivitiesVisMutation()

  useEffect(() => {
    if (dataDelete) {
      message.success(
        `Activity "${dataDelete?.deleteActivity?.title}" successfully deleted.`,
      )
    }
  }, [dataDelete])

  useEffect(() => {
    if (data) {
      message.success(data.saveActivities)
    }
  }, [data])

  useEffect(() => {
    if (triggerData) {
      message.success(triggerData.triggerActivitiesVis)
    }
  }, [triggerData])

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
      <Row>
        <Col>
          <Space align="center" size="large">
            <ButtonSave
              loading={loading}
              onClick={() =>
                saveActivities({
                  variables: {
                    title: title || '',
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
      </Row>
    )
  }

  if (!isVisible && !isAdmin) {
    return <></>
  }

  return (
    <Layout
      className={classNames('mt-lg-75 mt-50 pb-lg-75 pb-50', {
        'hidden-section': !isVisible,
      })}
    >
      <Container className="text-center">
        {renderControls()}
        <ActivitiesSign />
        <Title
          level={2}
          editable={isAdmin ? { onChange: (e: string) => setTitle(e) } : false}
          className="h2 mt-40f mb-45f"
        >
          {title}
        </Title>
        <Row gutter={30}>
          {initialState?.section?.activities?.map((activity) => {
            if (activity) {
              const { id, image, title, shortDesc, price, slug } = activity
              return (
                <Col
                  key={id}
                  lg={6}
                  sm={12}
                  className="w-100 d-flex align-items-stretch py-15"
                >
                  <Card
                    bordered={false}
                    key={title}
                    className="act-card w-100"
                    cover={
                      <Link href={`/activity/${slug}`}>
                        <a className="act-card__image-link">
                          <span
                            className={classNames('act-card__image bg-cover', {
                              'bg-cover': !image?.endsWith('placeholder.png'),
                              'bg-full': image?.endsWith('placeholder.png'),
                            })}
                            style={{
                              backgroundImage: `url('${
                                image ? image : placeholder
                              }')`,
                            }}
                          />
                        </a>
                      </Link>
                    }
                  >
                    <ButtonDelete
                      disabled={loadingDelete}
                      onClick={() =>
                        deleteActivity({
                          variables: {
                            id,
                          },
                        })
                      }
                      className="position-absolute pos-right-top"
                    />
                    <p className="act-card__price text-center f-weight-500">
                      ${price}/night
                    </p>
                    <h3 className="mb-10">
                      <Link href={`/activity/${slug}`}>
                        <a className="text-black">{title}</a>
                      </Link>
                    </h3>
                    <p className="mb-10 pb-15">{shortDesc}</p>
                    <Link href={`/activity/${slug}`}>
                      <a className="ant-btn ant-btn-default ant-btn-round ant-btn-lg">
                        Read More
                      </a>
                    </Link>
                  </Card>
                </Col>
              )
            }
          })}
        </Row>
        <div className="d-flex flex-column align-items-center">
          <Link href="/activity/new">
            <a className="ant-btn ant-btn-primary mt-20">
              <PlusOutlined />
              <span className="ml-10">Add activity</span>
            </a>
          </Link>
          <Button
            href="/"
            className="mt-45"
            shape="round"
            size="large"
            type="primary"
            ghost
          >
            View all
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
