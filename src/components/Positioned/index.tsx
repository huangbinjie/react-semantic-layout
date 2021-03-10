import React, { forwardRef, PropsWithChildren } from 'react'
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

export default forwardRef<HTMLDivElement, PropsWithChildren<PositionedProps>>(function Positioned(props, ref) {
  const { className = '', children, top, right, left, bottom, zIndex, ...restProps } = props

  const classname = jss({
    position: 'absolute', top, bottom, left, right, zIndex
  })

  return (
    <div
      ref={ref}
      className={classnames(classname, className)}
      debug-label="Positioned"
      {...restProps}
    >
      {only(children)}
    </div>
  )
})
