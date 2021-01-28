import { json } from 'body-parser'
import { ApolloServer, IResolvers } from 'apollo-server-express'
import mongoose from 'mongoose'
import './models'
import { typeDefs } from './schema/type-defs'
import {
  Slides,
  Pages,
  Medias,
  Auth,
  Services,
  Activities,
  ActivityResolver,
  Approach,
  FooterResolver,
} from './resolvers'
import { AdminAPI } from './dataSources'
import express from 'express'
import { merge } from 'lodash'
import { cookieKey, mongoURI } from './keys'
import cookieSession from 'cookie-session'
import passport from 'passport'
import './services/passport'
import { authRoutes } from './routes'
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import { Resolvers } from './types'

const MONGO_URI = mongoURI
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', (error) => console.log('Error connecting to MongoLab:', error))

// Provide resolver functions for your schema fields
type MergedResolvers = Resolvers & IResolvers
const resolvers: MergedResolvers = merge(
  Auth,
  Slides,
  Pages,
  Medias,
  Services,
  Activities,
  ActivityResolver,
  Approach,
  FooterResolver,
)

const server = new ApolloServer({
  typeDefs: [DIRECTIVES, typeDefs],
  resolvers,
  dataSources: () => ({ admin: new AdminAPI() }),
  context: ({ req }) => ({
    req,
  }),
})

const app = express()

app.use(json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  }),
)

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   }),
// )

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

server.applyMiddleware({ app })

app.use('/images', express.static('images'))

app.listen({ port: 5000 }, () =>
  console.log(`Server ready at http://localhost:5000${server.graphqlPath}`),
)
