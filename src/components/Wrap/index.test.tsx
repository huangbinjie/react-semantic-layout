import React from 'react'
import renderer from 'react-test-renderer'

import Wrap from '.'

describe('Wrap', () => {
  test('basic', () => {
    const tree = renderer.create(<Wrap>empty content</Wrap>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with gaps only', () => {
    const tree = renderer
      .create(
        <Wrap mainAxisGap={15} crossAxisGap={10}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Wrap>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with alignment', () => {
    const tree = renderer
      .create(
        <Wrap
          mainAxisAlignment="center"
          crossAxisAlignment="end"
          mainAxisGap={10}
          crossAxisGap={5}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Wrap>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with string gap values', () => {
    const tree = renderer
      .create(
        <Wrap mainAxisGap="1rem" crossAxisGap="0.5rem">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Wrap>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
