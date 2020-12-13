import mongoose from 'mongoose'

interface MediaAttrs {
  filename: string
  path: string
  mimetype: string
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
})

const Media = mongoose.model<MediaDoc, MediaModel>('Media', pageSchema)

pageSchema.statics.build = (attrs: MediaAttrs) => {
  return new Media(attrs)
}

export { Media }
