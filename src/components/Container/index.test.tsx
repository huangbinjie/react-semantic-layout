import React from 'react'
import renderer from 'react-test-renderer'

import Container from '.'

describe('Container', () => {
  test('basic', () => {
    const tree = renderer.create(
      <Container>empty content</Container>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
