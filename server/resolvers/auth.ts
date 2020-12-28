import { IResolvers } from 'apollo-server-express'

export const Auth: IResolvers = {
  Mutation: {
    signUp: async (_) => {
      console.log('test')
      return 'id'
    },
  },
}
