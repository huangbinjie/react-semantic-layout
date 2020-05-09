/**
 * @author: corol
 * @github: github.com/huangbinjie
 * @created: Sat May 09 2020
 * @file: https://api.flutter.dev/flutter/widgets/Wrap-class.html
 *
 * Copyright (c) 2020 Qiniu
 */

import React, { CSSProperties } from 'react'
import { style as jss } from 'typestyle'
import classnames from 'classnames'
import { Alignment, Direction } from '../../style'

export type CenterProps = {
  alignment: Alignment
  crossAxisAlignment: Alignment
  direction: Direction
  runAlignment: Alignment
  spacing: number // gap between adjacent chips
  runSpacing: number // gap between lines
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

export default function Wrap({ className = '', children, ...restProps }: CenterProps) {
  const classname = jss({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: "100%",
    height: "100%"
  })

  return (
    <div
      debug-label="Wrap"
      className={classnames(classname, className)}
      {...restProps}
    >
      {children}
    </div>
  )
}
