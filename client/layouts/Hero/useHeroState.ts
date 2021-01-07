import { Reducer, useReducer } from 'react'
import { FetchSlides } from 'types'

type Action = TitlePayload | DescPayload

export enum Type {
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_DESC = 'UPDATE_DESC',
}

interface TitlePayload {
  type: Type.UPDATE_TITLE
  payload: {
    updatedTitle: string
    slideId: string
  }
}
interface DescPayload {
  type: Type.UPDATE_DESC
  payload: {
    updatedDesc: string
    slideId: string
  }
}

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

const useHeroState = (initialState: FetchSlides['slides']) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  function updateTitle(updatedTitle: string, slideId: string) {
    dispatch({
      type: Type.UPDATE_TITLE,
      payload: { updatedTitle, slideId },
    })
  }
  function updateDesc(updatedDesc: string, slideId: string) {
    dispatch({
      type: Type.UPDATE_DESC,
      payload: { updatedDesc, slideId },
    })
  }

  return { state, updateTitle, updateDesc }
}

export { useHeroState }
