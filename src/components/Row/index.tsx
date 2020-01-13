import React from 'react'
import { style as jss } from 'typestyle'
import { Overflow, MainAxisSize, DirectionContext } from '../../style'

export type RowProps = {
  className?: string
  mainAxisSize?: MainAxisSize
  overflow?: Overflow
  style?: React.CSSProperties
}

/**
 * 上下布局的组件。
 * 高度是最高的子组件的高度。
 * 宽度默认 mainAxisSize='max'
 */
export default function Row({ mainAxisSize = 'max', children, ...restProps }: React.PropsWithChildren<RowProps>) {
  const classname = jss({
    display: 'flex',
    flexDirection: 'row',
    width: decodeMainAxisSize(mainAxisSize)
  })

  return (
    <DirectionContext.Provider value="row">
      <div debug-label="Row" className={classname} {...restProps}>{children}</div>
    </DirectionContext.Provider>
  )
}


export function decodeMainAxisSize(size: MainAxisSize) {
  if (size === 'min') {
    return 'auto'
  }

  return '100%'
}
