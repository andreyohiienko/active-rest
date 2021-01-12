import { Document, model, Model, Schema } from 'mongoose'
import { SlideAttrs, SlideDoc, slideSchema } from './slide'

export interface HeroAttrs {
  slides: SlideAttrs[]
}

export interface HeroDoc extends Document {
  sectionName: string
  slides: SlideDoc
}

interface HeroModel extends Model<HeroDoc> {
  build(attrs: HeroAttrs): HeroDoc
}

const heroSchema = new Schema({
  sectionName: {
    type: String,
    default: 'hero',
  },
  slides: [slideSchema],
})

const Hero = model<HeroDoc, HeroModel>('Hero', heroSchema)

heroSchema.statics.build = (attrs: HeroAttrs) => {
  return new Hero(attrs)
}

export { Hero }
