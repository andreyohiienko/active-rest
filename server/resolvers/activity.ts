import slugify from 'slugify'
import { Activity } from '../models'
import { Resolvers } from '../types'

export const ActivityResolver: Resolvers = {
  Query: {
    activity: async (_, { slug }) => {
      return await Activity.findOne({ slug })
    },
  },
  Mutation: {
    createActivity: async (_, { input }) => {
      let slug = slugify(input?.title || '', {
        replacement: '_',
        lower: true,
        strict: true,
      })

      let activities = await Activity.find({ slug })

      while (activities.length > 0) {
        const hasNumber = /(_)(\d+)$/
        if (hasNumber.test(slug)) {
          slug = slug.replace(hasNumber, (_, _g1, g2) => {
            return `_${++g2}`
          })
        } else {
          slug = slug + '_1'
        }
        activities = await Activity.find({ slug })
      }

      const activity = new Activity({
        ...input,
        slug,
        pubDate: new Date(),
      })

      return await activity.save()
    },
    saveActivity: async (_, { input }) => {
      await Activity.updateOne(
        { slug: input?.slug },
        {
          title: input?.title,
          shortDesc: input?.shortDesc,
          desc: input?.desc,
          image: input?.image,
          price: input?.price,
        },
      )
      return `Activity "${input?.title}" successfully saved.`
    },
    deleteActivity: async (_, { id }) => {
      const deletedActivity = await Activity.findOne({ _id: id })

      await Activity.deleteOne({ _id: id })
      return deletedActivity
    },
  },
}
