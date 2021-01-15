import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'apollo'
import type { AppProps } from 'next/app'
import '../styles/index.less'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
