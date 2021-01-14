import { IResolvers } from 'apollo-server-express'
import { model } from 'mongoose'
import { SectionApproachAttrs } from '../models'
const SectionApproach = model('section_approach')

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
      )
      return 'Approach section saved successfully.'
    },
    triggerApproachVis: async (_, { isVisible }: SectionApproachAttrs) => {
      await SectionApproach.updateOne(
        { sectionName: 'approach' },
        { isVisible },
      )

      return `Section approach successfully ${!isVisible ? 'hidden' : 'showed'}`
    },
  },
}
