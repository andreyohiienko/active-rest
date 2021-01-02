import { Express } from 'express'
import passport from 'passport'

const authRoutes = (app: Express) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  )
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (_, res) => {
      res.redirect('/')
    },
  )
  app.post('/auth', (req, res) => {
    console.log('req', req)
    res.send(req.user)
  })
}

export { authRoutes }
