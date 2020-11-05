import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => (
  <div className={`container${className ? ' ' + className : ''}`}>
    {children}
  </div>
)

export { Container }
