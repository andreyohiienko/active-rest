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
      return await Slide.findById(id)
    },
  },
  Mutation: {
    addSlide: async (_p, { title }) => {
      const slide = new Slide({ title })
      return await slide.save()
    },
    removeSlide: async (_p, { id }) => {
      const deletedSlide = await Slide.findById(id)

      await Slide.deleteOne({ _id: id })
      return deletedSlide
    },
  },
}
