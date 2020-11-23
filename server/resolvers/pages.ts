import { IResolvers } from 'apollo-server'
import mongoose from 'mongoose'
const Page = mongoose.model('Page')
const Slide = mongoose.model('Slide')

export const Pages: IResolvers = {
  Query: {
    pages: async (_, __, { dataSources }) => {
      const res = await dataSources.admin.fetchPages()
      return Array.isArray(res) ? res : []
    },
    page: async (_, { id }) => {
      return await Page.findOne({ _id: id })
    },
    // slider: async () => {
    //   return await Slide.find({})
    // },
  },
  // Mutation: {
  //   addPage: async (_p, { title }) => {
  //     const page = new Page({ title })
  //     return await page.save()
  //   },
  //   addSlide: async (_p, args) => {
  //     const slide = new Slide(args)
  //     return await slide.save()
  //   },
  // },
}
