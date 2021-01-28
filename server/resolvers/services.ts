import { Types } from 'mongoose'
import { SectionServices } from '../models'
import { Resolvers } from '../types'

export const Services: Resolvers = {
  Query: {
    services: async () => {
      return await SectionServices.findOne({ sectionName: 'services' })
    },
  },
  Mutation: {
    saveServices: async (_, { input }) => {
      await SectionServices.updateOne({ sectionName: 'services' }, [
        { $unset: ['services'] },
        {
          $set: {
            services: input?.services?.map((service: any) => ({
              _id: Types.ObjectId(),
              ...service,
            })),
          },
        },
      ])
      return 'Services section saved successfully.'
    },
    triggerServicesVis: async (_, { isVisible }) => {
      await SectionServices.updateOne(
        { sectionName: 'services' },
        { isVisible },
      )

      return `Section services successfully ${
        !isVisible ? 'hidden' : 'showed'
      }!`
    },
  },
}
