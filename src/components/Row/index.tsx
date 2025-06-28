import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import {
  AxisSize,
  DirectionContext,
  Alignment,
  decodeAlignment,
  decodeAxisSize,
} from '../../style'

export type RowProps = {
  className?: string
  mainAxisAlignment?: Alignment
  crossAxisAlignment?: Alignment
  mainAxisSize?: AxisSize
  crossAxisSize?: AxisSize
  gap?: number | string
  style?: React.CSSProperties
}

/**
 * 上下布局的组件。
 * 高度是最高的子组件的高度。
 * 宽度默认最大
 * 高度默认最小
 */
export default function Row({
  className = '',
  crossAxisAlignment = 'normal',
  mainAxisAlignment = 'start',
  mainAxisSize = 'max',
  crossAxisSize = 'min',
  gap = 0,
  children,
  ...restProps
}: React.PropsWithChildren<RowProps>) {
  const classname = jss({
    display: 'flex',
    flexDirection: 'row',
    alignItems: decodeAlignment(crossAxisAlignment),
    justifyContent: decodeAlignment(mainAxisAlignment),
    width: decodeAxisSize(mainAxisSize),
    height: decodeAxisSize(crossAxisSize),
    gap: typeof gap === 'number' ? `${gap}px` : gap,
  })

  return (
    <DirectionContext.Provider value="row">
      <div
        debug-label="Row"
        className={classnames(classname, className)}
        {...restProps}
      >
        {children}
      </div>
    </DirectionContext.Provider>
  )
}
