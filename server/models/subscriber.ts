import { Document, model, Model, Schema } from 'mongoose'

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
  email: String,
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.SUBSCRIBED,
  },
})

const Subscriber = model<SubscriberDoc, SubscriberModel>(
  'subscriber',
  subscriberSchema,
)

subscriberSchema.statics.build = (attrs: SubscriberAttrs) => {
  return new Subscriber(attrs)
}

export { Subscriber }
