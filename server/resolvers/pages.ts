import { IResolvers } from 'apollo-server-express'
import mongoose from 'mongoose'
const Page = mongoose.model('Page')
const Slide = mongoose.model('Slide')

export const Pages: IResolvers = {
  Query: {
    pages: async () => {
      return await Page.find({})
    },
    page: async (_p, { id }) => {
      return await Page.findOne({ _id: id })
    },
    slider: async () => {
      return await Slide.find({})
    },
  },
  Mutation: {
    addPage: async (_p, { title }) => {
      const page = new Page({ title })
      return await page.save()
    },
    addSlide: async (_p, args) => {
      const slide = new Slide(args)
      return await slide.save()
    },
  },
}
