import { IResolvers } from 'apollo-server-express'
import mongoose from 'mongoose'
import { PageDoc } from '../models'
const Page = mongoose.model('Page')

interface FetchPages {
  dataSources: {
    admin: {
      fetchPages(): Promise<PageDoc[]>
    }
  }
}

export const Pages: IResolvers<any, FetchPages> = {
  Query: {
    pages: async (_, __, { dataSources }) => {
      const res = await dataSources.admin.fetchPages()
      return Array.isArray(res) ? res : []
    },
    page: async (_, { id }) => {
      return await Page.findOne({ _id: id })
    },
  },
  // Mutation: {
  //   addPage: async (_p, { title }) => {
  //     const page = new Page({ title })
  //     return await page.save()
  //   },
  // },
}
