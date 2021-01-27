import { Document, model, Schema } from 'mongoose'
import { Slide } from '../types'

export type SlideDoc = Slide & Document

export const slideSchema = new Schema({
  title: {
    type: String,
    required: true,
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

const Slide = model<SlideDoc>('Slide', slideSchema)

export { Slide }
