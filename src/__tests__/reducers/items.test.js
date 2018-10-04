import reducer from '../../reducers/items'

const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

describe('items reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD_ITEM', () => {
    expect(
      reducer([], { type: ADD_ITEM, name: 'Buy Milk' })
    ).toEqual(['Buy Milk'])
  })

  it('should handle REMOVE_ITEM', () => {
    expect(
      reducer(['Buy Milk', 'Learn React', 'Learn Redux'], {
        type: REMOVE_ITEM,
        index: 1
      })
    ).toEqual(['Buy Milk', 'Learn Redux'])
  })
})