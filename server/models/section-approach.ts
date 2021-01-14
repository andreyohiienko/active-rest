import { Document, model, Model, Schema } from 'mongoose'
import { SectionActivitiesAttrs } from './section-activities'

export interface SectionApproachAttrs {
  isVisible: boolean
  title: string
  desc: string
}

interface SectionApproachDoc extends Document {
  isVisible: boolean
  title: string
  desc: string
}

interface ApproachModel extends Model<SectionApproachDoc> {
  build(attrs: SectionApproachAttrs): SectionApproachDoc
}

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

const SectionApproach = model<SectionApproachDoc, ApproachModel>(
  'section_approach',
  approachSchema,
)

approachSchema.statics.build = (attrs: SectionApproachAttrs) => {
  return new SectionApproach(attrs)
}

export { SectionApproach }
