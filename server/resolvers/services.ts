import { IResolvers } from 'apollo-server-express'
import mongoose from 'mongoose'
import { ServiceDoc } from '../models'
const Service = mongoose.model('Service')

export const Services: IResolvers = {
  Query: {
    services: async () => {
      return await Service.find({})
    },
  },
  Mutation: {
    addService: async (_, { title, desc, image }: ServiceDoc) => {
      const service = new Service({ title, desc, image })
      return await service.save()
    },
  },
}
