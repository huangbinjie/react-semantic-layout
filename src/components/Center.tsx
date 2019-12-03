import React from 'react'
import Container from './Container'
import { Style } from '../style'

export type CenterProps = {
  style: Style
  children: React.ReactNode
}

export default function Center({ children, style, ...restProps }: CenterProps) {
  return (
    <Container
      width="100%"
      height="100%"
      alignment="center"
      style={{ alignItems: 'center', ...style }}
      {...restProps}
    >
      {children}
    </Container>
  )
}
