export enum Type {
  UPDATE_TITLE,
  UPDATE_DESC,
  UPDATE_IMAGE,
}

export interface TitlePayload {
  updatedTitle: string
  id: string
}

export interface DescPayload {
  updatedDesc: string
  id: string
}

export interface ImagePayload {
  updatedImage: string
  id: string
}
