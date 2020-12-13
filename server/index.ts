import { json } from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import './models'
import { typeDefs } from './schema/type-defs'
import { Pages, Medias } from './resolvers'
import { AdminAPI } from './dataSources'
import express from 'express'
import { merge } from 'lodash'

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

// Provide resolver functions for your schema fields
const resolvers = merge(Pages, Medias)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ admin: new AdminAPI() }),
})

const app = express()
server.applyMiddleware({ app })

app.use(json())
app.use('/images', express.static('images'))

app.listen({ port: 5000 }, () =>
  console.log(`Server ready at http://localhost:5000${server.graphqlPath}`),
)
