import { InferValueTypes } from 'interfaces'
import { Reducer, useReducer } from 'react'
import { FetchHomePage_sectionServices } from 'types'
import * as actions from './actions'
import {
  DescPayload,
  RemovePayload,
  TitlePayload,
  ImagePayload,
  Type,
} from './types'
import { v4 } from 'uuid'

type Action = ReturnType<InferValueTypes<typeof actions>>

const reducer: Reducer<FetchHomePage_sectionServices['services'], Action> = (
  state,
  action,
) => {
  switch (action.type) {
    case Type.UPDATE_TITLE:
      if (state) {
        return state?.map((service) => {
          if (service && service.id === action.payload.itemId) {
            return {
              ...service,
              title: action.payload.updatedTitle,
            }
          }
          return service
        })
      }
      return state

    case Type.UPDATE_DESC:
      if (state) {
        return state.map((service) => {
          if (service && service.id === action.payload.itemId) {
            return {
              ...service,
              desc: action.payload.updatedDesc,
            }
          }
          return service
        })
      }
      return state

    case Type.REMOVE_SERVICE:
      if (state) {
        return state.filter((service) => service?.id !== action.payload?.itemId)
      }
      return state

    case Type.UPDATE_IMAGE:
      if (state) {
        return state.map((slide) => {
          if (slide && slide.id === action.payload.itemId) {
            return {
              ...slide,
              image: action.payload.updatedImage,
            }
          }
          return slide
        })
      }
      return state

    case Type.CREATE_SERVICE:
      if (state) {
        return [...state, action.payload]
      }
      return state

    default:
      return state
  }
}

const {
  updateDescAction,
  updateTitleAction,
  removeServiceAction,
  updateImageAction,
  createServiceAction,
} = actions

export const useServicesState = (
  initialState: FetchHomePage_sectionServices['services'],
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function updateTitle(payload: TitlePayload) {
    dispatch(updateTitleAction(payload))
  }
  function updateDesc(payload: DescPayload) {
    dispatch(updateDescAction(payload))
  }
  function removeService(payload: RemovePayload) {
    dispatch(removeServiceAction(payload))
  }
  function updateImage(payload: ImagePayload) {
    console.log('payload', payload)
    dispatch(updateImageAction(payload))
  }
  function createService() {
    dispatch(
      createServiceAction({
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
    removeService,
    updateImage,
    createService,
  }
}
