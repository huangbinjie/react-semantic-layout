import React from 'react'
import { style as jss } from 'typestyle'
import { Overflow, MainAxisSize, DirectionContext } from '../../style'

export type ColumnProps = {
  className?: string
  mainAxisSize?: MainAxisSize
  overflow?: Overflow
  style?: React.CSSProperties
}

/**
 * 上下布局的组件。
 * 高宽尽可能的大。
 */
export default function Column({ className = '', mainAxisSize = 'max', children, ...restProps }: React.PropsWithChildren<ColumnProps>) {
  const classname = jss({
    display: 'flex',
    flexDirection: 'column',
    width: decodeMainAxisSize(mainAxisSize)
  })

  return (
    <DirectionContext.Provider value="column">
      <div debug-label="Column" className={className + ' ' + classname} {...restProps}>{children}</div>
    </DirectionContext.Provider>
  )
}

export function decodeMainAxisSize(size: MainAxisSize) {
  if (size === 'min') {
    return 'auto'
  }

  return '100%'
}
