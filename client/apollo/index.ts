import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/client/link/error'
import { omitDeep } from 'utils'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path, extensions }) => {
        console.error(
          [
            `[GraphQL Code]: ${extensions?.code}\n`,
            `[GraphQL error]: Message: ${message}\n`,
            `[Location]: ${locations
              ?.map((loc) => `line ${loc.line}, column ${loc.column}`)
              .join(', ')}.\n`,
            path && `[Path]: ${path}\n`,
          ].join(''),
        )
      })

    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const uploadLink = createUploadLink({
    uri: `http://localhost:3000/graphql`,
    credentials: 'same-origin',
  })

  const cleanTypeName = new ApolloLink((operation, forward) => {
    if (operation.variables) {
      operation.variables = omitDeep(operation.variables, ['__typename'])
    }
    return forward(operation).map((data) => {
      return data
    })
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([errorLink, cleanTypeName, uploadLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  })
}

export function initializeApollo(initialState?: NormalizedCacheObject) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
