import { IResolvers } from 'apollo-server-express'
import { model, Types } from 'mongoose'
import { SectionServicesAttrs } from '../models'
const SectionServices = model('Section_Services')

export const Services: IResolvers = {
  Query: {
    services: async () => {
      return await SectionServices.findOne({ sectionName: 'services' })
    },
  },
  Mutation: {
    saveServices: async (
      _,
      { input: { services } }: { input: SectionServicesAttrs },
    ) => {
      await SectionServices.updateOne({ sectionName: 'services' }, [
        { $unset: ['services'] },
        {
          $set: {
            services: services.map((service: any) => ({
              _id: Types.ObjectId(),
              ...service,
            })),
          },
        },
      ])
      return 'Services section saved successfully.'
    },
    triggerServicesVis: async (_, { isVisible }: SectionServicesAttrs) => {
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
