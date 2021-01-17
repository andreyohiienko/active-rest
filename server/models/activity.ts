import { Document, model, Model, Schema } from 'mongoose'

interface ActivityAttrs {
  title: string
  desc: string
  shortDesc: string
  image: string
  likes: string
}

interface ActivityDoc extends Document {
  title: string
  desc: string
  shortDesc: string
  image: string
  likes: string[]
}

interface ActivityModel extends Model<ActivityDoc> {
  build(attrs: ActivityAttrs): ActivityDoc
}

const activitySchema = new Schema({
  title: String,
  desc: String,
  shortDesc: String,
  image: String,
  likes: [String],
})

const Activity = model<ActivityDoc, ActivityModel>('activity', activitySchema)

activitySchema.statics.build = (attrs: ActivityAttrs) => {
  return new Activity(attrs)
}

export { Activity }
