export enum Type {
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_DESC = 'UPDATE_DESC',
  REMOVE_SERVICE = 'REMOVE_SERVICE',
  CREATE_SERVICE = 'CREATE_SERVICE',
  UPDATE_IMAGE = 'UPDATE_IMAGE',
}

export interface TitlePayload {
  updatedTitle: string
  serviceId: string
}

export interface DescPayload {
  updatedDesc: string
  serviceId: string
}

export interface RemovePayload {
  serviceId: string
}

export interface ImagePayload {
  updatedImage: string
  serviceId: string
}

export interface CreatePayload {
  id: string
  title: 'Title'
  desc: 'Description...'
  image: 'images/placeholder.png'
}
