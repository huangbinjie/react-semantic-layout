import React, { forwardRef, useContext } from 'react'
import { Properties } from 'csstype'
import { detect } from 'detect-browser'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import {
  Alignment,
  decodeAlignment,
  LayoutStyle,
  LayoutStyleKey,
  Overflow,
  DirectionContext
} from '../../style'
import { Constraint } from '../../constraint'
import { only, Omit } from '../../utils'

const browser = detect()
const isIe = browser && browser.name === 'ie'

export type ContainerGap = {
  top?: 0 | string
  left?: 0 | string
  bottom?: 0 | string
  right?: 0 | string
}

export interface ContainerProps extends Omit<LayoutStyle, 'margin' | 'padding'> {
  /**
   * 指定 Container 子节点的对其方式
   * 
   * 注意，Container 默认为 Block 布局，指定了该属性则会变成 Flex 布局
   */
  alignment?: Alignment
  width?: string
  height?: string
  margin?: string | ContainerGap
  padding?: string | ContainerGap
  /**
   * 背景色
   */
  color?: string
  className?: string
  children?: React.ReactNode
  /**
   * 约束
   * 
   * 对自己生效
   */
  constraints?: Constraint
  overflow?: Overflow
  style?: Omit<Properties, LayoutStyleKey | keyof Constraint>
}

/**
 * 容器组件，提供丰富的布局效果
 * 
 * to honor the `width`, `height`,
 * to shrink to the children,
 * to be as small as possible.
 * 
 * @param props
 */
export default forwardRef<HTMLDivElement, ContainerProps>(function Container(props, ref) {
  const {
    className,
    constraints = {},
    color,
    width,
    height,
    alignment,
    margin,
    padding,
    children,
    overflow = 'visible',
    ...restProps
  } = props

  const { maxWidth = 'none', maxHeight = 'none', minWidth = 'auto', minHeight = 'auto' } = constraints
  const direction = useContext(DirectionContext)
  const isAvailableWidth = width && width !== 'auto'
  const isAvailableHeight = height && height !== 'auto'

  // 有子组件会收缩，有高宽会收缩
  const shrinkWrap =
    children != void 0 ||
    (direction === 'row' && isAvailableWidth) ||
    (direction === 'column' && isAvailableHeight)

  let displayStyle: object

  if (alignment) {
    const flexStyle = {
      display: shrinkWrap ? (isIe ? '-ms-inline-flex' : 'inline-flex') : 'flex',
      flexGrow: shrinkWrap ? 0 : 1,
      flexShrink: isAvailableWidth || isAvailableHeight ? 0 : 1,
      justifyContent: decodeAlignment(alignment),
      // shrinkWrap height
      alignSelf: shrinkWrap ? 'baseline' : 'auto',
    }

    displayStyle = flexStyle
  } else {
    const blockStyle = {
      height: shrinkWrap ? 'auto' : '100%'
    }

    displayStyle = blockStyle
  }

  const classname = jss(displayStyle, {
    width,
    height,
    margin: decodeGap(margin),
    padding: decodeGap(padding),
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    minWidth: minWidth,
    minHeight: minHeight,
    overflow,
    backgroundColor: color
  })

  return (
    <DirectionContext.Provider value="row">
      <div ref={ref} className={classnames(classname, className)} debug-label="Container" {...restProps}>
        {only(children)}
      </div>
    </DirectionContext.Provider>
  )
})

function decodeGap(margin?: string | ContainerGap): string | undefined {
  if (margin == null) return undefined
  if (typeof margin === 'string') {
    return margin
  }
  const { top = 0, right = 0, bottom = 0, left = 0 } = margin
  return `${top} ${right} ${bottom} ${left}`
}
