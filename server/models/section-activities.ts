import { Document, model, Schema } from 'mongoose'
import { Activities } from '../types'

type SectionActivitiesDoc = Activities & Document

const activitiesSchema = new Schema({
  sectionName: {
    type: String,
    default: 'activities',
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  title: String,
})

const SectionActivities = model<SectionActivitiesDoc>(
  'section_activities',
  activitiesSchema,
)

export { SectionActivities }
