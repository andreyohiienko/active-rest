import { IResolvers } from 'apollo-server-express'
import mongoose from 'mongoose'
import { SlideDoc } from '../models'
const Slide = mongoose.model('Slide')

interface FetchSlides {
  dataSources: {
    admin: {
      fetchSlides(): Promise<SlideDoc[]>
    }
  }
}

export const Slides: IResolvers<any, FetchSlides> = {
  Query: {
    slides: async (_, __, { dataSources }) => {
      const res = await dataSources.admin.fetchSlides()
      return Array.isArray(res) ? res : []
    },
    slide: async (_, { id }) => {
      return await Slide.findOne({ _id: id })
    },
  },
  // Mutation: {
  //   addPage: async (_p, { title }) => {
  //     const page = new Page({ title })
  //     return await page.save()
  //   },
  // },
}
