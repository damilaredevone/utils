import { position } from '../src'

describe('Position', () => {
  it('should be defined', () => {
    expect(position).toBeDefined()
  })

  it('should return undefined when array is empty', () => {
    const array = []
    expect(position(array, 1)).toBeUndefined()
  })

  it('should return number data if an index is provided', () => {
    const array = [1, 2, 3, 4, 5]
    expect(position(array, 2)).toBe(3)
    expect(position(array, 3)).not.toEqual(2)
  })

  it('should return string data if an index is provided', () => {
    const array = ['a', 'b', 'c', 'd', 'e']
    expect(position(array, 2)).toEqual('c')
    expect(position(array, 3)).not.toEqual('a')
  })

  it('should return object if an index is provided', () => {
    const array = [{ name: 'Damilare' }, { name: 'John' }, { name: 'Doe' }]
    expect(position(array, 2)).toEqual({ name: 'Doe' })
  })
})
