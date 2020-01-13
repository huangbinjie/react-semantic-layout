import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { MainAxisSize, DirectionContext, Alignment, decodeAlignment } from '../../style'

export type ColumnProps = {
  className?: string
  mainAxisAlignment?: Alignment
  crossAxisAlignment?: Alignment
  mainAxisSize?: MainAxisSize
  style?: React.CSSProperties
}

/**
 * 上下布局的组件。
 * 高宽尽可能的大。
 */
export default function Column({ className = '', crossAxisAlignment = 'normal', mainAxisAlignment = 'start', mainAxisSize = 'max', children, ...restProps }: React.PropsWithChildren<ColumnProps>) {
  const classname = jss({
    display: 'flex',
    flexDirection: 'column',
    alignItems: decodeAlignment(crossAxisAlignment),
    justifyContent: decodeAlignment(mainAxisAlignment),
    width: "100%",
    height: decodeMainAxisSize(mainAxisSize)
  })

  return (
    <DirectionContext.Provider value="column">
      <div debug-label="Column" className={classnames(classname, className)} {...restProps}>{children}</div>
    </DirectionContext.Provider>
  )
}

export function decodeMainAxisSize(size: MainAxisSize) {
  if (size === 'min') {
    return 'auto'
  }

  return '100%'
}
