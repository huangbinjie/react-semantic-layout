import React from 'react'
import { Properties } from 'csstype'
import { detect } from 'detect-browser'
import { style as jss } from 'typestyle'
import {
  Alignment,
  decodeAlignment,
  LayoutStyle,
  LayoutStyleKey,
  Overflow,
  DirectionContext
} from '../../style'
import { Constraint } from '../../constraint'
import { only } from '../../utils'

const browser = detect()
const isIe = browser && browser.name === 'ie'

export interface Container extends LayoutStyle {
  alignment?: Alignment
  width?: string
  height?: string
  margin?: string
  padding?: string
  // 背景色
  color?: string
  className?: string
  children?: React.ReactNode
  constraints?: Constraint
  overflow?: Overflow
  style?: Omit<Properties, LayoutStyleKey | keyof Constraint>
}

/**
 * 容器组件，提供丰富的布局效果。
 * to honor the `width`, `height`,
 * to shrink to the children,
 * to be as small as possible.
 * 
 *
 * @param props
 */
export default function Container(props: Container) {
  const {
    className,
    constraints = { maxWidth: 'none', maxHeight: 'none', minWidth: 'auto', minHeight: 'auto' },
    color,
    width,
    height,
    alignment = 'start',
    margin,
    padding,
    children,
    overflow = 'visible',
    ...restProps
  } = props

  const { maxWidth = 'none', maxHeight = 'none', minWidth = 'auto', minHeight = 'auto' } = constraints

  return (
    <DirectionContext.Consumer>
      {(direction) => {
        // 有子组件会收缩，有高宽会收缩
        const shrinkWrap =
          children != void 0 ||
          ((direction === 'row' && width && width !== 'auto') ||
            (direction === 'column' && height && height !== 'auto'))

        const classname = jss({
          display: shrinkWrap ? (isIe ? '-ms-inline-flex' : 'inline-flex') : 'flex',
          flexGrow: shrinkWrap ? 0 : 1,
          flexShrink: (width && width !== 'auto') || (height && height !== 'auto') ? 0 : 'unset',
          justifyContent: decodeAlignment(alignment),
          // shrinkWrap height
          alignSelf: shrinkWrap ? 'baseline' : 'auto',
          width,
          height,
          margin,
          padding,
          overflow,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          minWidth: minWidth,
          minHeight: minHeight,
          backgroundColor: color
        })

        return (
          <DirectionContext.Provider value="row">
            <div className={className ? className + ' ' : '' + classname} debug-label="Container" {...restProps}>
              {only(children)}
            </div>
          </DirectionContext.Provider>
        )
      }}
    </DirectionContext.Consumer>
  )
}
