import { Page } from '../models'
import { Resolvers } from '../types'

export const Pages: Resolvers = {
  Query: {
    pages: async () => {
      return await Page.find({})
    },
    page: async (_, { id }) => {
      return await Page.findOne({ _id: id })
    },
  },
}
