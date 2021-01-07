import { Reducer, useReducer } from 'react'
import { FetchSlides } from 'types'
import * as actions from './actions'
import { DescPayload, TitlePayload, Type } from './types'

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

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
  function updateTitle({ updatedTitle, slideId }: TitlePayload) {
    dispatch(updateTitleAction({ updatedTitle, slideId }))
  }
  function updateDesc({ updatedDesc, slideId }: DescPayload) {
    dispatch(updateDescAction({ updatedDesc, slideId }))
  }

  return { state, updateTitle, updateDesc }
}

export { useHeroState }
