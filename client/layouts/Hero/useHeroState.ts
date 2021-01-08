import { InferValueTypes } from 'interfaces'
import { Reducer, useReducer } from 'react'
import { FetchHomePage } from 'types'
import * as actions from './actions'
import { DescPayload, ImagePayload, TitlePayload, Type } from './types'

type Action = ReturnType<InferValueTypes<typeof actions>>

const reducer: Reducer<FetchHomePage['slides'], Action> = (state, action) => {
  switch (action.type) {
    case Type.UPDATE_TITLE:
      if (state) {
        return state?.map((slide) => {
          if (slide && slide.id === action.payload.slideId) {
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
          if (slide && slide.id === action.payload.slideId) {
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
          if (slide && slide.id === action.payload.slideId) {
            return {
              ...slide,
              image: action.payload.updatedImage,
            }
          }
          return slide
        })
      }
      return state

    default:
      return state
  }
}

const { updateTitleAction, updateDescAction, updateImageAction } = actions

const useHeroState = (initialState: FetchHomePage['slides']) => {
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

  return { state, updateTitle, updateDesc, updateImage }
}

export { useHeroState }
