import { IResolvers } from 'apollo-server-express'
import { model } from 'mongoose'
const Footer = model('Footer')

export const FooterResolver: IResolvers = {
  Query: {
    footer: async () => {
      return await Footer.findOne({ sectionName: 'footer' })
    },
  },
  Mutation: {
    saveFooter: async (_, { input: { title, desc, subTitle } }) => {
      const res = await Footer.updateOne(
        { sectionName: 'footer' },
        { title, desc, subTitle },
        { upsert: true }, // Creates a new document if no documents match the filter.
      )
      return 'Footer section successfully saved.'
    },
  },
}
