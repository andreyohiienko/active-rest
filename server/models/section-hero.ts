import { Document, model, Schema } from 'mongoose'
import { Hero } from '../types'
import { slideSchema } from './slide'

export type HeroDoc = Hero & Document

const heroSchema = new Schema({
  sectionName: {
    type: String,
    default: 'hero',
  },
  slides: [slideSchema],
})

const Hero = model<HeroDoc>('Hero', heroSchema)

export { Hero }
