import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { Alignment, decodeAlignment, decodeAxisSize } from '../../style'

export type WrapProps = {
  className?: string
  /** 水平对齐方式 */
  mainAxisAlignment?: Alignment
  /** 垂直对齐方式 */
  crossAxisAlignment?: Alignment
  /** 水平尺寸 */
  mainAxisSize?: 'min' | 'max'
  /** 垂直尺寸 */
  crossAxisSize?: 'min' | 'max'
  /** 水平间距 */
  mainAxisGap?: number | string
  /** 垂直间距 */
  crossAxisGap?: number | string
  style?: React.CSSProperties
}

/**
 * Wrap 组件，提供灵活的换行布局
 * 使用 flexbox + flex-wrap 实现自适应的换行布局
 */
export default function Wrap({
  className = '',
  mainAxisAlignment = 'start',
  crossAxisAlignment = 'start',
  mainAxisSize = 'max',
  crossAxisSize = 'min',
  mainAxisGap = 0,
  crossAxisGap = 0,
  children,
  ...restProps
}: React.PropsWithChildren<WrapProps>) {
  const mainAxisGapValue =
    typeof mainAxisGap === 'number' ? `${mainAxisGap}px` : mainAxisGap
  const crossAxisGapValue =
    typeof crossAxisGap === 'number' ? `${crossAxisGap}px` : crossAxisGap
  // 简单的 flex-wrap 布局
  const flexStyles: any = {
    display: 'flex',
    flexWrap: 'wrap',
    width: decodeAxisSize(mainAxisSize),
    height: decodeAxisSize(crossAxisSize),
    justifyContent: decodeAlignment(mainAxisAlignment),
    alignContent: decodeAlignment(crossAxisAlignment),
    gap: `${crossAxisGapValue} ${mainAxisGapValue}`,
  }

  const classname = jss(flexStyles)

  return (
    <div
      debug-label="Wrap"
      className={classnames(classname, className)}
      {...restProps}
    >
      {children}
    </div>
  )
}
