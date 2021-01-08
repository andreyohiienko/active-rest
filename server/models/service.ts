import mongoose from 'mongoose'

interface ServiceAttrs {
  title: string
  desc: string
  image: string
}

export interface ServiceDoc extends mongoose.Document {
  title: string
  desc: string
  image: string
}

interface ServiceModel extends mongoose.Model<ServiceDoc> {
  build(attrs: ServiceAttrs): ServiceDoc
}

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
})

const Service = mongoose.model<ServiceDoc, ServiceModel>(
  'Service',
  serviceSchema,
)

serviceSchema.statics.build = (attrs: ServiceAttrs) => {
  return new Service(attrs)
}

export { Service }
