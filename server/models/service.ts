import { Schema, model, Model, Document, VirtualType } from 'mongoose'

export interface ServiceAttrs {
  title: string
  desc: string
  image: string
}

export interface ServiceDoc extends Document {
  _id: string
  title: string
  desc: string
  image: string
}

interface ServiceModel extends Model<ServiceDoc> {
  build(attrs: ServiceAttrs): ServiceDoc
}

export const serviceSchema = new Schema({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
})
