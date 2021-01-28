import { Document, model, Schema } from 'mongoose'
import { Page } from '../types'

type PageDoc = Page & Document

const pageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
})

const Page = model<PageDoc>('Page', pageSchema)

export { Page }
