import { Activity, SectionActivities } from '../models'
import { Resolvers } from '../types'

export const Activities: Resolvers = {
  Query: {
    activities: async () => {
      return await SectionActivities.findOne({
        sectionName: 'activities',
      })
    },
  },
  Mutation: {
    saveActivities: async (_, { input }) => {
      await SectionActivities.updateOne(
        { sectionName: 'activities' },
        { title: input?.title },
      )
      return 'Activities section saved successfully.'
    },
    triggerActivitiesVis: async (_, { isVisible }) => {
      await SectionActivities.updateOne(
        { sectionName: 'activities' },
        { isVisible },
      )

      return `Section activities successfully ${
        !isVisible ? 'hidden' : 'showed'
      }!`
    },
  },
  Activities: {
    activities: async () => {
      return await Activity.find({}).limit(12).sort({ pubDate: 'desc' })
    },
  },
}
