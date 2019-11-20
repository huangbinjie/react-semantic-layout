import React, { PropsWithChildren } from 'react'

export default function Expanded({ flex = 1, children }: PropsWithChildren<{ flex?: number }>) {
  return <div style={{ flex }}>{children}</div>
}
