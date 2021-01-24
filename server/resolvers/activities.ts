import { IResolvers } from 'apollo-server-express'
import { model } from 'mongoose'
import { SectionActivitiesAttrs } from '../models'
const SectionActivities = model('section_activities')
const Activity = model('activity')

export const Activities: IResolvers = {
  Query: {
    activities: async () => {
      return await SectionActivities.findOne({
        sectionName: 'activities',
      })
    },
  },
  Mutation: {
    saveActivities: async (
      _,
      { input: { title } }: { input: SectionActivitiesAttrs },
    ) => {
      await SectionActivities.updateOne(
        { sectionName: 'activities' },
        { title },
      )
      return 'Activities section saved successfully.'
    },
    triggerActivitiesVis: async (_, { isVisible }: SectionActivitiesAttrs) => {
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
