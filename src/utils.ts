import React from 'react'

export function only(child: React.ReactNode) {
  // string、number 等作为 child 的时候，only 会报错，所以需要 count 判断一下
  if (React.Children.count(child) > 1) {
    return React.Children.only(child)
  }

  return child
}

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
