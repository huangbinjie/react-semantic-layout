import React from 'react'
import renderer from 'react-test-renderer'

import Center from '.'

describe('Center', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Center>empty content</Center>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
