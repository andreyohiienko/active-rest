import type { AppProps } from 'next/app'
import '../styles/index.less'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
