import React from 'react'
import renderer from 'react-test-renderer'

import Expanded from '.'

describe('Expanded', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Expanded>empty content</Expanded>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
