import { Document, model, Schema } from 'mongoose'
import { Activity } from '../types'

type ActivityDoc = Activity & Document

const activitySchema = new Schema({
  title: { type: String, default: '' },
  slug: { type: String },
  desc: { type: String, default: '' },
  shortDesc: { type: String, default: '' },
  image: { type: String, default: '' },
  price: { type: Number, default: 0 },
  likes: { type: [String], default: [] },
  pubDate: Date,
})

const Activity = model<ActivityDoc>('activity', activitySchema)

export { Activity }
