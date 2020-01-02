import React, { PropsWithChildren } from 'react'
import { Container } from '../..';

export type PositionedProps = {
  top: string
  left: string
  bottom: string
  right: string
}

export default function Positioned(props: PropsWithChildren<PositionedProps>) {
  const {
    children,
    top,
    right,
    left,
    bottom
  } = props

  return <Container debuggerLabel="Positioned" style={{ position: 'absolute', top, bottom, left, right }}>{children}</Container>
}
