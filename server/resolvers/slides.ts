import { IResolvers } from 'apollo-server-express'
import { identity, isEmpty, pickBy } from 'lodash'
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
    addSlide: async (_p, { title, desc, image }) => {
      console.log('title', title)
      console.log('desc', desc)
      console.log('image', image)
      const slide = new Slide({ title, desc, image })
      return await slide.save()
    },
    removeSlide: async (_p, { id }) => {
      const deletedSlide = await Slide.findById(id)

      await Slide.deleteOne({ _id: id })
      return deletedSlide
    },
    updateSlide: async (_, { id, title, desc, image }) => {
      const slide = pickBy({ title, desc, image }, identity)

      if (!isEmpty(slide)) {
        try {
          const updatedSlide = await Slide.updateOne({ _id: id }, { ...slide })
          if (updatedSlide.ok) {
            return 'updated'
          }
        } catch (error) {
          return error
        }
      }
    },
  },
}
