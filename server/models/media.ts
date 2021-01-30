import { Document, model, Schema } from 'mongoose'
import { Media } from '../types'

type MediaDoc = Media & Document

const mediaSchema = new Schema({
  asset_id: String,
  public_id: String,
  version: Number,
  version_id: String,
  signature: String,
  width: Number,
  height: Number,
  format: String,
  resource_type: String,
  created_at: String,
  tags: [String],
  bytes: Number,
  type: String,
  etag: String,
  placeholder: Boolean,
  url: String,
  secure_url: String,
  original_filename: String,
})

const Media = model<MediaDoc>('Media', mediaSchema)

export { Media }
