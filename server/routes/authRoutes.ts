import { Express } from 'express'
import passport from 'passport'

const authRoutes = (app: Express) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  )
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: 'http://localhost:5000/graphql',
      failureRedirect: 'http://localhost:5000/graphql',
    }),
  )
}

export { authRoutes }
