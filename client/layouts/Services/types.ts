export enum Type {
  UPDATE_TITLE = 'UPDATE_TITLE',
  UPDATE_DESC = 'UPDATE_DESC',
}

export interface TitlePayload {
  updatedTitle: string
  serviceId: string
}

export interface DescPayload {
  updatedDesc: string
  serviceId: string
}
