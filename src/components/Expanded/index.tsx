import React from 'react'
import { style as jss } from 'typestyle'
import { only } from '../../utils'

export type ExpandedProps = {
  className?: string
  flex?: number
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function Expanded({ className = '', flex = 1, children, ...restProps }: ExpandedProps) {
  const classname = jss({ flex: 1 })

  return (
    <div debug-label="Expanded" className={className + ' ' + classname} {...restProps}>
      {only(children)}
    </div>
  )
}
