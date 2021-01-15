import { Document, model, Model, Schema } from 'mongoose'

interface FooterAttrs {
  title: string
  desc: string
  subtitle: string
}

interface FooterDoc extends Document {
  title: string
  desc: string
  subtitle: string
}

interface FooterModel extends Model<FooterDoc> {
  build(attrs: FooterAttrs): FooterDoc
}

const footerSchema = new Schema({
  title: String,
  desc: String,
  subtitle: String,
})

const Footer = model<FooterDoc, FooterModel>('Footer', footerSchema)

footerSchema.statics.build = (attrs: FooterAttrs) => {
  return new Footer(attrs)
}

export { Footer }
