export enum Type {
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_DESC = 'UPDATE_DESC',
  UPDATE_IMAGE = 'UPDATE_IMAGE',
}

export interface TitlePayload {
  updatedTitle: string
  slideId: string
}

export interface DescPayload {
  updatedDesc: string
  slideId: string
}

export interface ImagePayload {
  updatedImage: string
  slideId: string
}
