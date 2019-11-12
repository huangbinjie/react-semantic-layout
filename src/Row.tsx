import React from 'react'
import { Overflow } from './style'

export interface IRow {
  className?: string
  overflow?: Overflow
}

/**
 * 上下布局的组件。
 * 高宽默认占满父容器。
 * 默认占满父容器
 */
export default function Row(props: React.PropsWithChildren<IRow>) {
  const {
    children,
    overflow = 'hidden',
    ...restProps
  } = props

  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    overflow
  }

  return <div style={style} {...restProps}>{children}</div>
}
