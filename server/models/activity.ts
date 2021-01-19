import { Document, model, Model, Schema } from 'mongoose'

export interface ActivityAttrs {
  title: string
  desc: string
  shortDesc: string
  image: string
  price: number
  likes: string
}

interface ActivityDoc extends Document {
  title: string
  slug: string
  desc: string
  shortDesc: string
  image: string
  price: number
  likes: string[]
}

interface ActivityModel extends Model<ActivityDoc> {
  build(attrs: ActivityAttrs): ActivityDoc
}

const activitySchema = new Schema({
  title: { type: String, default: '' },
  slug: { type: String },
  desc: { type: String, default: '' },
  shortDesc: { type: String, default: '' },
  image: { type: String, default: '' },
  price: { type: Number, default: 0 },
  likes: { type: [String], default: [] },
})

const Activity = model<ActivityDoc, ActivityModel>('activity', activitySchema)

activitySchema.statics.build = (attrs: ActivityAttrs) => {
  return new Activity(attrs)
}

export { Activity }
