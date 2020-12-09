import mongoose from 'mongoose'

interface PageAttrs {
  title: string
}

interface PageDoc extends mongoose.Document {
  title: string
}

interface PageModel extends mongoose.Model<PageDoc> {
  build(attrs: PageAttrs): PageDoc
}

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
})

const Page = mongoose.model<PageDoc, PageModel>('Page', pageSchema)

pageSchema.statics.build = (attrs: PageAttrs) => {
  return new Page(attrs)
}

export { Page, PageDoc }
