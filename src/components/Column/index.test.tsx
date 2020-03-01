import React from 'react'
import renderer from 'react-test-renderer'

import Column from '.'

describe('Column', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Column>empty content</Column>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
