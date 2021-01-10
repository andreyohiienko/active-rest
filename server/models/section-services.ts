import { Schema, model, Model, Document } from 'mongoose'
import { ServiceAttrs, ServiceDoc, serviceSchema } from './service'

export interface SectionServicesAttrs {
  isVisible: boolean
  services: ServiceAttrs[]
}

export interface SectionServicesDoc extends Document {
  sectionName: string
  isVisible: boolean
  services: ServiceDoc[]
}

interface SectionServicesModel extends Model<SectionServicesDoc> {
  build(attrs: SectionServicesAttrs): SectionServicesDoc
}

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

const SectionServices = model<SectionServicesDoc, SectionServicesModel>(
  'Section_Services',
  servicesSchema,
)

servicesSchema.statics.build = (attrs: SectionServicesAttrs) => {
  return new SectionServices(attrs)
}

export { SectionServices }
