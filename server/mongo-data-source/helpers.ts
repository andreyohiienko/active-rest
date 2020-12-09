import { Collection, Document, Model } from 'mongoose'
import { InMemoryLRUCache } from 'apollo-server-caching'

const TYPEOF_COLLECTION = 'object'

export const isModel = <T extends Model<Document> | Collection>(
  x: T,
): boolean => (<Model<Document>>x).collection !== undefined

export const isCollectionOrModel = <T extends Model<Document> | Collection>(
  x: T,
): boolean => Boolean(x && (typeof x === TYPEOF_COLLECTION || isModel(x)))

export const getCollection = <T extends Model<Document> | Collection>(x: T) => {
  if (isModel(x)) {
    return (<Model<Document>>x).collection
  }
  return x
}
