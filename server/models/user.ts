import mongoose from 'mongoose'

interface UserAttrs {
  googleId: string
}

interface UserDoc extends mongoose.Document {
  googleId: string
  role: 'admin' | 'user'
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  role: String,
})

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

export { User }
