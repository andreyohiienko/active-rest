export enum Type {
  UPDATE_TITLE,
  UPDATE_DESC,
  REMOVE_SERVICE,
  CREATE_SERVICE,
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

export interface RemovePayload {
  itemId: string
}

export interface ImagePayload {
  updatedImage: string
  itemId: string
}

export interface CreatePayload {
  id: string
  title: 'Title'
  desc: 'Description...'
  image: 'images/placeholder.png'
}
