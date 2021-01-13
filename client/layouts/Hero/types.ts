export enum Type {
  UPDATE_TITLE,
  UPDATE_DESC,
  UPDATE_IMAGE,
}

export interface TitlePayload {
  updatedTitle: string
  itemId: string
}

export interface DescPayload {
  updatedDesc: string
  itemId: string
}

export interface ImagePayload {
  updatedImage: string
  itemId: string
}
