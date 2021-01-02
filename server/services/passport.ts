import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import mongoose from 'mongoose'
import { googleClientID, googleClientSecret } from '../keys'

const User = mongoose.model('User')

interface SerializedUser {
  id?: string
}

passport.serializeUser<string>((user: SerializedUser, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    if (user) {
      done(null, user)
    }
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id })
        if (existingUser) {
          return done(undefined, existingUser)
        }
      } catch (error) {
        console.log('error', error)
      }

      try {
        const user = await new User({
          googleId: profile.id,
          role: 'admin',
        }).save()
        done(undefined, user)
      } catch (error) {
        console.log('error', error)
      }
    },
  ),
)
