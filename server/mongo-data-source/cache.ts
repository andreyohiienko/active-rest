import DataLoader from 'dataloader'
import { ObjectId } from 'mongodb'
import { EJSON } from 'bson'
import { Collection, Model, Document } from 'mongoose'
import { KeyValueCache } from 'apollo-server-caching'

import { getCollection } from './helpers'

export const idToString = (id: ObjectId) =>
  id instanceof ObjectId ? id.toHexString() : id

// https://github.com/graphql/dataloader#batch-function
const orderDocs = (ids: ObjectId[]) => (docs: Document[]): Document[] => {
  type idMapOptions = {
    [key: string]: Document
  }

  const idMap: idMapOptions = {}
  docs.forEach((doc) => {
    idMap[idToString(doc._id)] = doc
  })
  return ids.map((id) => idMap[idToString(id)])
}

interface CreateCachingMethods {
  collection: Collection
  model?: Model<Document>
  cache: KeyValueCache<string>
}

export const createCachingMethods = ({
  collection,
  model,
  cache,
}: CreateCachingMethods) => {
  const loader = new DataLoader((ids: ObjectId[]) => {
    const filter = {
      _id: {
        $in: ids,
      },
    }
    const promise = model
      ? model.find(filter).exec()
      : collection.find(filter).toArray()

    return promise.then(orderDocs(ids))
  })

  const cachePrefix = `mongo-${getCollection(collection).collectionName}-`

  const methods = {
    findOneById: async (id: ObjectId, { ttl }: { ttl: number }) => {
      const key = cachePrefix + idToString(id)

      const cacheDoc = await cache.get(key)
      if (cacheDoc) {
        return EJSON.parse(cacheDoc)
      }

      const doc = await loader.load(id)
      // https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-caching#apollo-server-caching
      cache.set(key, EJSON.stringify(doc), { ttl })

      return doc
    },
    findManyByIds: (ids: ObjectId[], { ttl }: { ttl: number }) => {
      return Promise.all(ids.map((id) => methods.findOneById(id, { ttl })))
    },
    deleteFromCacheById: async (id: ObjectId) => {
      loader.clear(id)
      await cache.delete(cachePrefix + id)
    },
  }

  return methods
}
