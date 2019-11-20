import React from 'react'
import { detect } from 'detect-browser'
import { Alignment, decodeAlignment, LayoutStyle, LayoutStyleKey } from '../style'
import { Constraint } from '../constraint'

const browser = detect()
const isIe = browser && browser.name === 'ie'

export interface Container extends LayoutStyle {
  className?: string
  children?: React.ReactNode
  constraints?: Constraint
  alignment?: Alignment
  style?: Omit<React.CSSProperties, keyof LayoutStyle | keyof Constraint>
}

/**
 * 容器组件，提供丰富的布局效果。
 * to honor the `width`, `height`,
 * to expand to fit the parent,
 * to be as big as possible.
 *
 * @param props
 */
export default function Container(props: Container) {
  const {
    color,
    width,
    height,
    alignment = 'start',
    margin,
    padding,
    style,
    children,
    ...restProps
  } = props

  const shrinkWrap = children != void 0

  return (
    <div
      {...restProps}
      style={{
        ...style,
        display: shrinkWrap ? isIe ? '-ms-inline-flex' : 'inline-flex' : 'flex',
        flex: shrinkWrap ? 'none' : 1,
        justifyContent: decodeAlignment(alignment),
        // shrinkWrap height
        alignSelf: shrinkWrap ? 'baseline' : 'auto',
        width,
        height,
        margin,
        padding,
        // flex 1 width 不生效，用约束让其生效
        maxWidth: width,
        maxHeight: height,
        backgroundColor: color
      }}
    >
      {children}
    </div>
  )
}
