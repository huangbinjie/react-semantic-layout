import React from 'react'
import renderer from 'react-test-renderer'

import Spacer from '.'

describe('Spacer', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Spacer />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
