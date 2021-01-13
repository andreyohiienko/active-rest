import {
  Type,
  TitlePayload,
  DescPayload,
  RemovePayload,
  CreatePayload,
  ImagePayload,
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
export const removeServiceAction = (payload: RemovePayload) =>
  ({
    type: Type.REMOVE_SERVICE,
    payload,
  } as const)
export const updateImageAction = (payload: ImagePayload) =>
  ({
    type: Type.UPDATE_IMAGE,
    payload,
  } as const)
export const createServiceAction = (payload: CreatePayload) =>
  ({
    type: Type.CREATE_SERVICE,
    payload,
  } as const)
