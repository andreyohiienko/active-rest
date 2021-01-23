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

      let activities = await Activity.find({ slug })

      while (activities.length > 0) {
        const hasNumber = /(_)(\d+)$/
        if (hasNumber.test(slug)) {
          slug = slug.replace(hasNumber, (_, g1, g2) => {
            return `_${++g2}`
          })
        } else {
          slug = slug + '_1'
        }
        activities = await Activity.find({ slug })
      }

      const activity = new Activity({
        title,
        slug,
        desc,
        shortDesc,
        image,
        price,
        pubDate: new Date(),
      })

      return await activity.save()
    },
    saveActivity: async (_, { input }) => {
      await Activity.updateOne(
        { slug: input.slug },
        {
          title: input.title,
          shortDesc: input.shortDesc,
          desc: input.desc,
          image: input.image,
          price: input.price,
        },
      )
      return `Activity "${input.title}" successfully saved.`
    },
    deleteActivity: async (_, { id }) => {
      const deletedActivity = await Activity.findOne({ _id: id })

      await Activity.deleteOne({ _id: id })
      return deletedActivity
    },
  },
}
