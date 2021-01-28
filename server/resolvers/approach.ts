import { SectionApproach, Subscriber } from '../models'
import { Resolvers } from '../types'

export const Approach: Resolvers = {
  Query: {
    approach: async () => {
      return await SectionApproach.findOne({ sectionName: 'approach' })
    },
  },
  Mutation: {
    saveApproach: async (_, { input }) => {
      await SectionApproach.updateOne(
        { sectionName: 'approach' },
        {
          title: input?.title,
          desc: input?.desc,
        },
        { upsert: true }, // Creates a new document if no documents match the filter.
      )
      return 'Approach section saved successfully.'
    },
    triggerApproachVis: async (_, { isVisible }) => {
      await SectionApproach.updateOne(
        { sectionName: 'approach' },
        { isVisible },
        { upsert: true }, // Creates a new document if no documents match the filter.
      )

      return `Section approach successfully ${!isVisible ? 'hidden' : 'showed'}`
    },
    addSubscriber: async (_, { email }) => {
      const subscriber = new Subscriber({ email })

      return await subscriber.save()
    },
  },
}
