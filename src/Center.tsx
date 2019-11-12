import React from 'react'
import Container from './Container'

export default function Center({ children, style, ...restProps }: React.HtmlHTMLAttributes<{}>) {
  return (
    <Container
      alignment="center"
      style={{ alignItems: 'center', ...style }}
      {...restProps}
    >
      {children}
    </Container>
  )
}
