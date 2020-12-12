import { json } from 'body-parser'
import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import './models'
import { typeDefs } from './schema/type-defs'
import { Pages, Medias } from './resolvers'
import { AdminAPI } from './dataSources'

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
const resolvers = { ...Medias, ...Pages }

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ admin: new AdminAPI() }),
})

server.listen(5000).then(({ url }) => console.log(`Server ready at ${url}`))
