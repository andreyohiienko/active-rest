import { Document, model, Model, Schema } from 'mongoose'

export interface SectionActivitiesAttrs {
  isVisible: boolean
  title: string
}

interface SectionActivitiesDoc extends Document {
  isVisible: boolean
  title: string
}

interface ActivitiesModel extends Model<SectionActivitiesDoc> {
  build(attrs: SectionActivitiesAttrs): SectionActivitiesDoc
}

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

const SectionActivities = model<SectionActivitiesDoc, ActivitiesModel>(
  'section_activities',
  activitiesSchema,
)

activitiesSchema.statics.build = (attrs: SectionActivitiesAttrs) => {
  return new SectionActivities(attrs)
}

export { SectionActivities }
