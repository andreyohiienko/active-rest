import {
  Type,
  TitlePayload,
  DescPayload,
  ImagePayload,
  RemovePayload,
  CreatePayload,
} from './types'

export const updateTitleAction = (payload: TitlePayload) =>
  ({
    type: Type.UPDATE_TITLE,
    payload,
  } as const)

export const updateDescAction = (payload: DescPayload) =>
  ({
    type: Type.UPDATE_DESC,
    payload,
  } as const)

export const updateImageAction = (payload: ImagePayload) =>
  ({
    type: Type.UPDATE_IMAGE,
    payload,
  } as const)

export const removeSlideAction = (payload: RemovePayload) =>
  ({
    type: Type.REMOVE_SLIDE,
    payload,
  } as const)

export const createSlideAction = (payload: CreatePayload) =>
  ({
    type: Type.CREATE_SLIDE,
    payload,
  } as const)
