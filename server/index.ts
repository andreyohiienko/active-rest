import { json } from 'body-parser'
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import './models'
import { typeDefs } from './schema/type-defs'
import { Pages } from './resolvers'

const app: Application = express()

const MONGO_URI =
  'mongodb+srv://andrew:p8PLHlxKDwc5LXo7@cluster0.rwban.mongodb.net/active-rest?retryWrites=true&w=majority'
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

app.use(json())

// Provide resolver functions for your schema fields
const resolvers = { ...Pages }

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

app.listen(5000, () =>
  console.log('Now browse to http://localhost:5000/graphql'),
)
