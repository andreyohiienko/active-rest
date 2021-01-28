import { IResolvers, UserInputError } from 'apollo-server-express'
import { Types } from 'mongoose'
import { Hero, Slide } from '../models'
import { Resolvers } from '../types'

type SlideResolver = Resolvers & IResolvers

export const Slides: SlideResolver = {
  Query: {
    slides: async () => {
      const res = await Slide.find({})
      return Array.isArray(res) ? res : []
    },
    slide: async (_, { id }) => {
      return await Slide.findById(id)
    },
    hero: async () => {
      return await Hero.findOne({ sectionName: 'hero' })
    },
  },
  Mutation: {
    saveSlides: async (_, { input }) => {
      await Hero.updateOne({ sectionName: 'hero' }, [
        { $unset: ['slides'] },
        {
          $set: {
            slides: input?.slides?.map((slide) => ({
              _id: Types.ObjectId(),
              ...slide,
            })),
          },
        },
      ])

      return 'Hero section saved successfully.'
    },
    addSlide: async (_p, { title, desc, image }) => {
      const slide = new Slide({ title, desc, image })
      return await slide.save()
    },
    removeSlide: async (_p, { id }) => {
      const deletedSlide = await Slide.findById(id)

      await Slide.deleteOne({ _id: id })
      return deletedSlide
    },
    updateSlide: async (_, { id, title, desc, image }) => {
      if (!title) {
        throw new UserInputError("Title can't be empty!")
      }

      try {
        const updatedSlide = await Slide.updateOne(
          { _id: id },
          { title, desc, image },
        )
        if (updatedSlide.ok) {
          return 'updated'
        }
      } catch (error) {
        return error
      }
    },
  },
}
