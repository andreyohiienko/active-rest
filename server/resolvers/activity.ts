import { IResolvers } from 'apollo-server-express'
import { model } from 'mongoose'
import { ActivityAttrs } from '../models'
const Activity = model('activity')

export const ActivityResolver: IResolvers = {
  Query: {
    activity: async (_, { slug }) => {
      return await Activity.findOne({ slug })
    },
  },
  Mutation: {
    createActivity: async (
      _,
      {
        input: { title, desc, shortDesc, image, price },
      }: { input: ActivityAttrs },
    ) => {
      const activity = new Activity({ title, desc, shortDesc, image, price })

      return await activity.save()
    },
  },
}
