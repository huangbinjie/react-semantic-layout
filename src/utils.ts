import React from 'react'

export function only(child: React.ReactNode) {
  if (React.isValidElement(child)) {
    return React.Children.only(child)
  }

  return child
}
