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
  const classname = jss({
    flex: 1,
    // 这个属性让 flex 1 不会被内容撑起来导致不生效，TODO: 考虑给 props 增加 overflow 属性
    overflow: 'auto'
  })

  return (
    <div debug-label="Expanded" className={className + ' ' + classname} {...restProps}>
      {only(children)}
    </div>
  )
}
