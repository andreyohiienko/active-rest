import { Schema } from 'mongoose'

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
