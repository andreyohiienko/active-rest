import { DataSource, DataSourceConfig } from 'apollo-datasource'
import { ApolloError } from 'apollo-server-errors'
import { InMemoryLRUCache } from 'apollo-server-caching'

import { createCachingMethods } from './cache'
import { isCollectionOrModel, isModel } from './helpers'
import { Collection, Model, Document } from 'mongoose'

class MongoDataSource extends DataSource {
  model?: Model<Document>
  collection: Collection
  context: any

  constructor(collection: Model<Document> | Collection) {
    super()

    if (!isCollectionOrModel(collection)) {
      throw new ApolloError(
        'MongoDataSource constructor must be given a collection or Mongoose model',
      )
    }

    if (isModel(collection)) {
      this.model = <Model<Document>>collection
      this.collection = (<Model<Document>>this.model).collection
    } else {
      this.collection = <Collection>collection
    }
  }

  // https://github.com/apollographql/apollo-server/blob/master/packages/apollo-datasource/src/index.ts
  initialize({ context, cache }: DataSourceConfig<any>) {
    this.context = context

    const methods = createCachingMethods({
      collection: this.collection,
      model: this.model,
      cache: cache || new InMemoryLRUCache(),
    })

    Object.assign(this, methods)
  }
}

export { MongoDataSource }
