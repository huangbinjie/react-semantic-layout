import React, { CSSProperties, ReactNode } from 'react'
import { style as jss } from 'typestyle'
import Positioned from '../Positioned'

export type StackProps = {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

/**
 * https://api.flutter.dev/flutter/rendering/RenderStack-class.html
 * 
 * The stack is then sized to enclose all of the non-positioned children.
 * If there are no non-positioned children, the stack becomes as large as possible.
 */
export default function Stack({ className = '', children, ...restProps }: StackProps) {
  let hasNonePositioned = false

  React.Children.forEach(children, (child: any) => {
    if (child && child.type !== Positioned) {
      hasNonePositioned = true
    }
  })

  const width = hasNonePositioned ? 'auto' : '100%'
  const height = hasNonePositioned ? 'auto' : '100%'

  const classname = jss({
    position: 'relative',
    width,
    height
  })

  return <div className={className + ' ' + classname} debug-label="Stack" {...restProps}>{children}</div>
}
