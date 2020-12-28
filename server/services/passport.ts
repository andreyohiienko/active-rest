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
      proxy: true,
      scope: 'id',
      // callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        return done(undefined, existingUser)
      }

      console.log('profile', profile.id)

      const user = await new User({ goodleId: profile.id }).save()
      done(undefined, user)
    },
  ),
)
