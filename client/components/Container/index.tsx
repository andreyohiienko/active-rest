import React, { ReactNode } from 'react'
import { mergeClasses } from 'utils'

type Props = {
  children: ReactNode
  className?: string
  fluid?: boolean
}

const Container = ({ children, className, fluid = false }: Props) => (
  <div
    className={mergeClasses(
      ['container', fluid ? 'container-fluid' : ''],
      className,
    )}
  >
    {children}
  </div>
)

export { Container }
