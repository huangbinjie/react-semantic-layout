import React from 'react'
import renderer from 'react-test-renderer'

import Row from '.'

describe('Row', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Row>empty content</Row>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
