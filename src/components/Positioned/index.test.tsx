import React from 'react'
import renderer from 'react-test-renderer'

import Positioned from '.'

describe('Positioned', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Positioned>empty content</Positioned>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
