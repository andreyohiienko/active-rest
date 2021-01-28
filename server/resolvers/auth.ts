import { ExpressContext } from 'apollo-server-express/dist/ApolloServer'
import { Resolvers, User } from '../types'

interface Context {
  req: {
    user: User
  }
}

export const Auth: Resolvers = {
  Query: {
    currentUser: async (_, __, context: Context) => {
      return context.req.user
    },
    signout: async (_, __, context: ExpressContext) => {
      context.req.logout()
      return { message: 'You are succesfully logged out!' }
    },
  },
}
