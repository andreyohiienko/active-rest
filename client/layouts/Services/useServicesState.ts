import { InferValueTypes } from 'interfaces'
import { Reducer, useReducer } from 'react'
import { FetchHomePage_sectionServices } from 'types'
import * as actions from './actions'
import { DescPayload, TitlePayload, Type } from './types'

type Action = ReturnType<InferValueTypes<typeof actions>>

const reducer: Reducer<FetchHomePage_sectionServices['services'], Action> = (
  state,
  action,
) => {
  switch (action.type) {
    case Type.UPDATE_TITLE:
      if (state) {
        return state?.map((service) => {
          if (service && service.id === action.payload.serviceId) {
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
          if (service && service.id === action.payload.serviceId) {
            return {
              ...service,
              desc: action.payload.updatedDesc,
            }
          }
          return service
        })
      }
      return state

    default:
      return state
  }
}

const { updateDescAction, updateTitleAction } = actions

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

  return { state, updateTitle, updateDesc }
}
