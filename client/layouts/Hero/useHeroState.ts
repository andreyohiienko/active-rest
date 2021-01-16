import { message } from 'antd'
import { InferValueTypes } from 'interfaces'
import { Reducer, useReducer } from 'react'
import { Hero_hero } from 'types'
import { v4 } from 'uuid'
import * as actions from './actions'
import {
  DescPayload,
  ImagePayload,
  RemovePayload,
  TitlePayload,
  Type,
} from './types'

type Action = ReturnType<InferValueTypes<typeof actions>>

const reducer: Reducer<Hero_hero['slides'], Action> = (state, action) => {
  switch (action.type) {
    case Type.UPDATE_TITLE:
      if (state) {
        return state?.map((slide) => {
          if (slide && slide.id === action.payload.id) {
            return {
              ...slide,
              title: action.payload.updatedTitle,
            }
          }
          return slide
        })
      }
      return state

    case Type.UPDATE_DESC:
      if (state) {
        return state.map((slide) => {
          if (slide && slide.id === action.payload.id) {
            return {
              ...slide,
              desc: action.payload.updatedDesc,
            }
          }
          return slide
        })
      }
      return state

    case Type.UPDATE_IMAGE:
      if (state) {
        return state.map((slide) => {
          if (slide && slide.id === action.payload.id) {
            return {
              ...slide,
              image: action.payload.updatedImage,
            }
          }
          return slide
        })
      }
      return state

    case Type.REMOVE_SLIDE:
      if (state?.length === 1) {
        message.warning('Sorry, at least 1 slide should remain.')
        return state
      }
      if (state) {
        return state.filter((slide) => slide?.id !== action.payload.id)
      }
      return state

    case Type.CREATE_SLIDE:
      if (state) {
        return [...state, action.payload]
      }
      return state

    default:
      return state
  }
}

const {
  updateTitleAction,
  updateDescAction,
  updateImageAction,
  removeSlideAction,
  createSlideAction,
} = actions

const useHeroState = (initialState: Hero_hero['slides']) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  function updateTitle(payload: TitlePayload) {
    dispatch(updateTitleAction(payload))
  }
  function updateDesc(payload: DescPayload) {
    dispatch(updateDescAction(payload))
  }
  function updateImage(payload: ImagePayload) {
    dispatch(updateImageAction(payload))
  }

  function removeSlide(payload: RemovePayload) {
    dispatch(removeSlideAction(payload))
  }

  function createSlide() {
    dispatch(
      createSlideAction({
        id: v4(),
        title: 'Title',
        desc: 'Description...',
        image: 'images/placeholder.png',
      }),
    )
  }

  return {
    state,
    updateTitle,
    updateDesc,
    updateImage,
    removeSlide,
    createSlide,
  }
}

export { useHeroState }
