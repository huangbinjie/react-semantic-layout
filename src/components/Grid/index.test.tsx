import React from 'react'
import renderer from 'react-test-renderer'

import Grid from './index'

describe('Grid', () => {
  test('basic', () => {
    const tree = renderer.create(<Grid>empty content</Grid>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with columns', () => {
    const tree = renderer
      .create(
        <Grid columns={3} mainAxisGap={16} crossAxisGap={16}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
        </Grid>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with rows', () => {
    const tree = renderer
      .create(
        <Grid rows={2} mainAxisGap={16} crossAxisGap={16}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
        </Grid>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with both rows and columns', () => {
    const tree = renderer
      .create(
        <Grid rows={2} columns={3} mainAxisGap={16} crossAxisGap={16}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
        </Grid>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with alignment', () => {
    const tree = renderer
      .create(
        <Grid
          columns={2}
          mainAxisAlignment="center"
          crossAxisAlignment="end"
          mainAxisGap={10}
          crossAxisGap={5}
        >
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Grid>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with string gap values', () => {
    const tree = renderer
      .create(
        <Grid columns={3} mainAxisGap="1rem" crossAxisGap="0.5rem">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('fallback to flex layout', () => {
    const tree = renderer
      .create(
        <Grid mainAxisGap={16} crossAxisGap={16}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
