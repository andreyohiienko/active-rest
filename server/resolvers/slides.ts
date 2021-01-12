import { IResolvers, UserInputError } from 'apollo-server-express'
import { model, Types } from 'mongoose'
import { HeroAttrs, SlideDoc } from '../models'
const Slide = model('Slide')
const Hero = model('Hero')

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
    saveSlides: async (_, { input: { slides } }: { input: HeroAttrs }) => {
      await Hero.updateOne({ sectionName: 'hero' }, [
        { $unset: ['slides'] },
        {
          $set: {
            slides: slides.map((slide) => ({
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
