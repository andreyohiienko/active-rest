import { Footer } from '../models'
import { Resolvers } from '../types'

export const FooterResolver: Resolvers = {
  Query: {
    footer: async () => {
      return await Footer.findOne({ sectionName: 'footer' })
    },
  },
  Mutation: {
    saveFooter: async (_, { input }) => {
      const res = await Footer.updateOne(
        { sectionName: 'footer' },
        { ...input },
        { upsert: true }, // Creates a new document if no documents match the filter.
      )
      return 'Footer section successfully saved.'
    },
  },
}
