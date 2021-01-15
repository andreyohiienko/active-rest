import { IResolvers } from 'apollo-server-express'
import { model } from 'mongoose'
import { SectionApproachAttrs } from '../models'
const SectionApproach = model('section_approach')
const Subscriber = model('subscriber')

export const Approach: IResolvers = {
  Query: {
    approach: async () => {
      return await SectionApproach.findOne({ sectionName: 'approach' })
    },
  },
  Mutation: {
    saveApproach: async (
      _,
      { input: { title, desc } }: { input: SectionApproachAttrs },
    ) => {
      await SectionApproach.updateOne(
        { sectionName: 'approach' },
        {
          title,
          desc,
        },
        { upsert: true }, // Creates a new document if no documents match the filter.
      )
      return 'Approach section saved successfully.'
    },
    triggerApproachVis: async (_, { isVisible }: SectionApproachAttrs) => {
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
