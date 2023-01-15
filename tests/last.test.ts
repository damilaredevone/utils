import { last } from '../src'

describe('Last Method', () => {
  it('returns the last element of an array', () => {
    const array = [1, 2, 3, 4, 5]
    expect(last(array)).toBe(5)
  })

  it('returns undefined for an empty array', () => {
    const array: number[] = []
    expect(last(array)).toBeUndefined()
  })

  it('returns the last element of a string array', () => {
    const array = ['a', 'b', 'c']
    expect(last(array)).toBe('c')
  })

  it('returns the last element of a mixed array', () => {
    const array = [1, 'b', true, {}]
    expect(last(array)).toEqual({})
  })

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4, 5]
    last(array)
    expect(array).toEqual([1, 2, 3, 4, 5])
  })
})
