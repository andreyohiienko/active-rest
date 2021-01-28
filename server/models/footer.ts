import { Document, model, Schema } from 'mongoose'
import { Footer } from '../types'
type FooterDoc = Footer & Document

const footerSchema = new Schema({
  sectionName: {
    type: String,
    default: 'footer',
  },
  title: String,
  desc: String,
  subTitle: String,
})

const Footer = model<FooterDoc>('Footer', footerSchema)

export { Footer }
