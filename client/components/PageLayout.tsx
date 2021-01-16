import { FooterSection } from 'components'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Header } from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const PageLayout = ({
  children,
  title = 'This is the default title',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <FooterSection />
  </div>
)

export { PageLayout }
