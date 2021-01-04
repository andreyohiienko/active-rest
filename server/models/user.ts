import mongoose from 'mongoose'

interface UserAttrs {
  googleId: string
}

interface UserDoc extends mongoose.Document {
  googleId: string
  role: string[]
  email: string
  name: string
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  role: [String],
  email: String,
  name: String,
})

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

export { User }
