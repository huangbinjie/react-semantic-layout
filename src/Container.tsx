import React from 'react'
import { detect } from 'detect-browser'
import { Alignment, decodeAlignment } from './style'

const browser = detect()
const isIe = browser && browser.name === 'ie'

export interface IContainer {
  className?: string
  color?: string
  children?: React.ReactNode
  width?: string
  height?: string
  alignment?: Alignment
  margin?: string
  padding?: string
  shrinkWrap?: boolean
  style?: React.CSSProperties
}

/**
 * 容器组件，提供丰富的布局效果。
 * to honor the `width`, `height`,
 * to expand to fit the parent,
 * to be as big as possible.
 *
 * @param props
 */
export default function Container(props: IContainer) {
  const {
    color,
    width,
    height,
    alignment = 'start',
    margin,
    padding,
    shrinkWrap,
    style,
    children,
    ...restProps
  } = props

  return (
    <div
      {...restProps}
      style={{
        ...style,
        display: shrinkWrap ? isIe ? '-ms-inline-flex' : 'inline-flex' : 'flex',
        flex: shrinkWrap ? 'none' : 1,
        justifyContent: decodeAlignment(alignment),
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
