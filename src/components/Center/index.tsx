import React, { CSSProperties } from 'react'
import { style as jss } from 'typestyle'

export type CenterProps = {
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

export default function Center({ className = '', children, ...restProps }: CenterProps) {
  const classname = jss({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  })

  return (
    <div
      debug-label="Center"
      className={className + ' ' + classname}
      {...restProps}
    >
      {children}
    </div>
  )
}
