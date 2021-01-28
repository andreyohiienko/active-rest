import { Document, model, Schema } from 'mongoose'
import { Approach } from '../types'

type SectionApproachDoc = Approach & Document

const approachSchema = new Schema({
  sectionName: {
    type: String,
    default: 'approach',
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  title: String,
  desc: String,
})

const SectionApproach = model<SectionApproachDoc>(
  'section_approach',
  approachSchema,
)

export { SectionApproach }
