import { IResolvers } from 'apollo-server-express'

export const Auth: IResolvers = {
  Query: {
    currentUser: async (_, __, context) => {
      return context.req.user
    },
    signout: async (_, __, context) => {
      context.req.logout()
      return { message: 'You are succesfully logged out!' }
    },
  },
}
