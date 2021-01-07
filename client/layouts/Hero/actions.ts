import { Type, TitlePayload, DescPayload } from './types'

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
