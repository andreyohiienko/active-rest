import { Document, model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { Subscriber, SubscriberStatus } from '../types'

type SubscriberDoc = Subscriber & Document

const subscriberSchema = new Schema({
  email: {
    type: String,
    unique: 'Sorry, {VALUE} email is already exists. Please try another email.',
  },
  status: {
    type: String,
    enum: Object.values(SubscriberStatus),
    default: SubscriberStatus.Subscribed,
  },
})
subscriberSchema.plugin(uniqueValidator)

const Subscriber = model<SubscriberDoc>('subscriber', subscriberSchema)

export { Subscriber }
