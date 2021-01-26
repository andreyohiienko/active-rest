import mongoose from 'mongoose'

interface MediaAttrs {
  filename: string
  path: string
  mimetype: string
  size: number
}

export interface MediaDoc extends mongoose.Document {
  filename: string
  path: string
  mimetype: string
}

interface MediaModel extends mongoose.Model<MediaDoc> {
  build(attrs: MediaAttrs): MediaDoc
}

const pageSchema = new mongoose.Schema({
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

const Media = mongoose.model<MediaDoc, MediaModel>('Media', pageSchema)

pageSchema.statics.build = (attrs: MediaAttrs) => {
  return new Media(attrs)
}

export { Media }
