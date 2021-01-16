import { useAdmin } from 'hooks'
import { cloneDeepWith } from 'lodash'
import { initializeApollo } from 'apollo'
import { DocumentNode } from 'graphql'

export const serverUrl = 'http://localhost:5000/'

export const isEditable = (setState: (e: string) => void) => {
  const isAdmin = useAdmin()

  return isAdmin ? { onChange: (e: string) => setState(e) } : false
}

export const omitDeep = (collection: object, excludeKeys: string[]) => {
  function omitFn(value: any) {
    if (value && typeof value === 'object') {
      excludeKeys.forEach((key: string) => {
        delete value[key]
      })
    }
  }

  return cloneDeepWith(collection, omitFn)
}

export async function getQueries(queris: DocumentNode[]) {
  const client = initializeApollo()

  const res = await Promise.all(queris.map((query) => client.query({ query })))
  return res
}
