import { Document, model, Model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

interface SubscriberAttrs {
  email: string
  status: Status
}

interface SubscriberDoc extends Document {
  email: string
  status: Status
}

enum Status {
  SUBSCRIBED = 'SUBSCRIBED',
  UNSUBSCRIBED = 'UNSUBSCRIBED',
}

interface SubscriberModel extends Model<SubscriberDoc> {
  build(attrs: SubscriberAttrs): SubscriberDoc
}

const subscriberSchema = new Schema({
  email: {
    type: String,
    unique: 'Sorry, {VALUE} email is already exists. Please try another email.',
  },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.SUBSCRIBED,
  },
})
subscriberSchema.plugin(uniqueValidator)

const Subscriber = model<SubscriberDoc, SubscriberModel>(
  'subscriber',
  subscriberSchema,
)

subscriberSchema.statics.build = (attrs: SubscriberAttrs) => {
  return new Subscriber(attrs)
}

export { Subscriber }
