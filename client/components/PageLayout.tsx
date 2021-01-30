import { FooterSection } from 'components'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Header } from './Header'

type Props = {
  children?: ReactNode
  title?: string | null
  isAbsoluteHeader?: boolean
  isDarkHeader?: boolean
}

const PageLayout = ({
  children,
  title = 'This is the default title',
  isAbsoluteHeader,
  isDarkHeader,
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header {...{ isAbsoluteHeader, isDarkHeader }} />
    {children}
    <FooterSection />
  </>
)

export { PageLayout }
