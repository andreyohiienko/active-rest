import { Schema, model, Document } from 'mongoose'
import { Services } from '../types'
import { serviceSchema } from './service'

type SectionServicesDoc = Services & Document

const servicesSchema = new Schema({
  sectionName: {
    type: String,
    default: 'services',
  },
  isVisible: {
    type: Boolean,
    default: true,
  },
  services: [serviceSchema],
})

const SectionServices = model<SectionServicesDoc>(
  'Section_Services',
  servicesSchema,
)

export { SectionServices }
