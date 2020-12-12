import mongoose from 'mongoose'

interface MediaAttrs {
  name: string
  mimetype: string
}

export interface MediaDoc extends mongoose.Document {
  name: string
  mimetype: string
}

interface MediaModel extends mongoose.Model<MediaDoc> {
  build(attrs: MediaAttrs): MediaDoc
}

const pageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mimetype: String,
})

const Media = mongoose.model<MediaDoc, MediaModel>('Media', pageSchema)

pageSchema.statics.build = (attrs: MediaAttrs) => {
  return new Media(attrs)
}

export { Media }
