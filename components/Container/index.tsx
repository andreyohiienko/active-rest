import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => (
  <div className="container">{children}</div>
)

export { Container }
