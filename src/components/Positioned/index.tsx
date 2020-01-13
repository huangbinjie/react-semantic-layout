import React, { PropsWithChildren } from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { only } from '../../utils'

export type PositionedProps = {
  className?: string
  top?: string
  left?: string
  bottom?: string
  right?: string
  zIndex?: number
  style?: React.CSSProperties
}

export default function Positioned(props: PropsWithChildren<PositionedProps>) {
  const { className = '', children, top, right, left, bottom, zIndex, ...restProps } = props

  const classname = jss({
    position: 'absolute', top, bottom, left, right, zIndex
  })

  return (
    <div
      className={classnames(classname, className)}
      debug-label="Positioned"
      {...restProps}
    >
      {only(children)}
    </div>
  )
}
