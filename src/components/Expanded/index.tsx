import React from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { only } from '../../utils'

export type ExpandedProps = {
  className?: string
  flex?: number
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function Expanded({ className = '', flex = 1, children, ...restProps }: ExpandedProps) {
  const classname = jss({
    flex: 1,
    // https://stackoverflow.com/a/68666833
    // 修复 Expand 可能因为内容导致宽度不对的问题, 强制宽度优先采用 flex-grow 给予的宽度
    // 比如 Row 下面有2 Expand，可能因为内容过长导致没有被平均分配
    minWidth: 0
  })

  return (
    <div debug-label="Expanded" className={classnames(classname, className)} {...restProps}>
      {only(children)}
    </div>
  )
}
