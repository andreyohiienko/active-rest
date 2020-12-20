import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  className?: string
  fluid?: boolean
}

const Container = ({ children, className, fluid = false }: Props) => (
  <div
    className={classNames('container', className, { 'container-fluid': fluid })}
  >
    {children}
  </div>
)

export { Container }
