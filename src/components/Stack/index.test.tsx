import React from 'react'
import renderer from 'react-test-renderer'

import Stack from '.'

describe('Stack', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Stack>empty content</Stack>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
