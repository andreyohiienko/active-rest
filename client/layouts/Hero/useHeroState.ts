import { InferValueTypes } from 'interfaces'
import { Reducer, useReducer } from 'react'
import { FetchSlides } from 'types'
import * as actions from './actions'
import { DescPayload, TitlePayload, Type } from './types'

type Action = ReturnType<InferValueTypes<typeof actions>>

const reducer: Reducer<FetchSlides['slides'], Action> = (state, action) => {
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

    default:
      return state
  }
}

const { updateTitleAction, updateDescAction } = actions

const useHeroState = (initialState: FetchSlides['slides']) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  function updateTitle(payload: TitlePayload) {
    dispatch(updateTitleAction(payload))
  }
  function updateDesc(payload: DescPayload) {
    dispatch(updateDescAction(payload))
  }

  return { state, updateTitle, updateDesc }
}

export { useHeroState }