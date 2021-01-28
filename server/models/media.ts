import { Document, model, Schema } from 'mongoose'
import { Media } from '../types'

type MediaDoc = Media & Document

const pageSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  path: String,
  mimetype: String,
  size: {
    type: Number,
    default: 0,
  },
})

const Media = model<MediaDoc>('Media', pageSchema)

export { Media }
