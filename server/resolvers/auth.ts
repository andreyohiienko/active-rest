import { IResolvers } from 'apollo-server-express'

export const Auth: IResolvers = {
  Query: {
    currentUser: async (_, __, context) => {
      console.log('context.req.user', context.req.user)
      return context.req.user
    },
  },
}
