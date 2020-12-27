import mongoose from 'mongoose'

interface SlideAttrs {
  title: string
  desc: string
  image: string
}

export interface SlideDoc extends mongoose.Document {
  title: string
  desc: string
  image: string
}

interface SlideModel extends mongoose.Model<SlideDoc> {
  build(attrs: SlideAttrs): SlideDoc
}

const slideSchema = new mongoose.Schema({
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

const Slide = mongoose.model<SlideDoc, SlideModel>('Slide', slideSchema)

slideSchema.statics.build = (attrs: SlideAttrs) => {
  return new Slide(attrs)
}

export { Slide }
