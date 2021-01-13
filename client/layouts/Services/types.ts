export enum Type {
  UPDATE_TITLE,
  UPDATE_DESC,
  UPDATE_IMAGE,
  REMOVE_SERVICE,
  CREATE_SERVICE,
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

export interface RemovePayload {
  id: string
}

export interface CreatePayload {
  id: string
  title: 'Title'
  desc: 'Description...'
  image: 'images/placeholder.png'
}
