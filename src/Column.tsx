import React from 'react'
import { Overflow } from './style'

export interface IColumn {
  className?: string
  overflow?: Overflow
}

/**
 * 上下布局的组件。
 * 高宽默认占满父容器。
 * 默认占满父容器
 */
export default function Column(props: React.PropsWithChildren<IColumn>) {
  const {
    children,
    overflow = 'hidden',
    ...restProps
  } = props

  const style: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow
  }

  return <div style={style} {...restProps}>{children}</div>
}
