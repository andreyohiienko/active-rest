import { IResolvers } from 'apollo-server-express'
import mongoose, { Schema } from 'mongoose'
const SectionServices = mongoose.model('Section_Services')

export const Services: IResolvers = {
  Query: {
    services: async () => {
      return await SectionServices.findOne({ sectionName: 'services' })
    },
  },
  Mutation: {
    saveServices: async (_, { input: { services } }) => {
      await SectionServices.updateOne({ sectionName: 'services' }, [
        { $unset: ['services'] },
        {
          $set: {
            services: services.map((service: any) => ({
              _id: mongoose.Types.ObjectId(),
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
        { isVisible: !isVisible },
      )

      return `Section services successfully ${
        !isVisible ? 'hidden' : 'showed'
      }!`
    },
  },
}
