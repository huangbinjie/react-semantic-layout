import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { Alignment, decodeAlignment, decodeAxisSize } from '../../style'

export type GridProps = {
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
  /** 水平方向子组件个数（列数） */
  columns?: number
  /** 垂直方向子组件个数（行数） */
  rows?: number
  style?: React.CSSProperties
}

/**
 * Grid 组件，提供网格布局
 * 使用 CSS Grid 或 Flexbox 实现固定网格布局
 * 可以指定行数和列数，控制子元素的排列
 */
export default function Grid({
  className = '',
  mainAxisAlignment = 'start',
  crossAxisAlignment = 'start',
  mainAxisSize = 'max',
  crossAxisSize = 'min',
  mainAxisGap = 0,
  crossAxisGap = 0,
  columns,
  rows,
  children,
  ...restProps
}: React.PropsWithChildren<GridProps>) {
  const mainAxisGapValue =
    typeof mainAxisGap === 'number' ? `${mainAxisGap}px` : mainAxisGap
  const crossAxisGapValue =
    typeof crossAxisGap === 'number' ? `${crossAxisGap}px` : crossAxisGap

  let gridStyles: any
  if (columns || rows) {
    // 使用 CSS Grid 布局
    gridStyles = {
      display: 'grid',
      gap: `${crossAxisGapValue} ${mainAxisGapValue}`,
      justifyContent: decodeAlignment(mainAxisAlignment),
      alignContent: decodeAlignment(crossAxisAlignment),
      width: decodeAxisSize(mainAxisSize),
      height: decodeAxisSize(crossAxisSize),
    }

    if (columns && rows) {
      // 同时指定行数和列数
      gridStyles.gridTemplateColumns = `repeat(${columns}, 1fr)`
      gridStyles.gridTemplateRows = `repeat(${rows}, 1fr)`
      gridStyles.overflow = 'hidden'
    } else if (columns) {
      // 只指定列数，行数自动
      gridStyles.gridTemplateColumns = `repeat(${columns}, 1fr)`
    } else if (rows) {
      // 只指定行数，让网格自动分配列数
      gridStyles.gridTemplateRows = `repeat(${rows}, 1fr)`
      gridStyles.gridAutoFlow = 'column'
      gridStyles.gridAutoColumns = '1fr'
    }
  } else {
    // 如果没有指定行列数，回退到简单的 flex 布局
    gridStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: decodeAlignment(mainAxisAlignment),
      alignContent: decodeAlignment(crossAxisAlignment),
      gap: `${crossAxisGapValue} ${mainAxisGapValue}`,
    }
  }

  const classname = jss(gridStyles)

  return (
    <div
      debug-label="Grid"
      className={classnames(classname, className)}
      {...restProps}
    >
      {children}
    </div>
  )
}
