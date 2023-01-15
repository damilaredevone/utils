import { first } from '../src'

describe('First Method', () => {
  it('returns the first element of an array', () => {
    const array = [1, 2, 3, 4, 5]
    expect(first(array)).toBe(1)
  })

  it('returns undefined for an empty array', () => {
    const array: number[] = []
    expect(first(array)).toBeUndefined()
  })

  it('returns the first element of a string array', () => {
    const array = ['a', 'b', 'c']
    expect(first(array)).toBe('a')
  })

  it('returns the first element of a mixed array', () => {
    const array = [1, 'b', true, {}]
    expect(first(array)).toEqual(1)
  })

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4, 5]
    first(array)
    expect(array).toEqual([1, 2, 3, 4, 5])
  })
})
