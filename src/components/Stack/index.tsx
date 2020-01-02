import React, { HTMLAttributes } from 'react'
import Container from '../Container'
import Positioned from '../Positioned'

export type StackProps = {

}

/**
 * https://api.flutter.dev/flutter/rendering/RenderStack-class.html
 * 
 * The stack is then sized to enclose all of the non-positioned children.
 * If there are no non-positioned children, the stack becomes as large as possible.
 */
export default function Stack({ children }: HTMLAttributes<StackProps>) {
  let hasNonePositioned = false
  React.Children.forEach(children, (child: any) => {
    if (child && child.type !== Positioned) {
      hasNonePositioned = true
    }
  })

  const width = hasNonePositioned ? 'auto' : '100%'
  const height = hasNonePositioned ? 'auto' : '100%'

  return <Container debuggerLabel="Stack" width={width} height={height} style={{ position: 'relative' }}>{children}</Container>
}
