import { IResolvers } from 'apollo-server-express'
import { model } from 'mongoose'
import slugify from 'slugify'
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
      let slug = slugify(title, {
        replacement: '_',
        lower: true,
        strict: true,
      })

      const activities = await Activity.find({ slug })

      if (activities.length) {
        slug = slug + '_' + activities.length
      }
      console.log('slug', slug)

      // const activity = new Activity({
      //   title,
      //   slug,
      //   desc,
      //   shortDesc,
      //   image,
      //   price,
      // })

      // return await activity.save()
    },
  },
}
