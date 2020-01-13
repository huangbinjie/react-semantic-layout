import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { MainAxisSize, DirectionContext, Alignment, decodeAlignment } from '../../style'

export type RowProps = {
  className?: string
  mainAxisAlignment?: Alignment
  crossAxisAlignment?: Alignment
  mainAxisSize?: MainAxisSize
  style?: React.CSSProperties
}

/**
 * 上下布局的组件。
 * 高度是最高的子组件的高度。
 * 宽度默认 mainAxisSize='max'
 */
export default function Row({ className = '', crossAxisAlignment = 'start', mainAxisAlignment = 'start', mainAxisSize = 'max', children, ...restProps }: React.PropsWithChildren<RowProps>) {
  const classname = jss({
    display: 'flex',
    flexDirection: 'row',
    alignItems: decodeAlignment(crossAxisAlignment),
    justifyContent: decodeAlignment(mainAxisAlignment),
    width: decodeMainAxisSize(mainAxisSize)
  })

  return (
    <DirectionContext.Provider value="row">
      <div debug-label="Row" className={classnames(classname, className)} {...restProps}>{children}</div>
    </DirectionContext.Provider>
  )
}


export function decodeMainAxisSize(size: MainAxisSize) {
  if (size === 'min') {
    return 'auto'
  }

  return '100%'
}
