import { arrayIncludes } from '../src'

describe('ArrayIncludes', () => {
  it('returns true if item is included in array', () => {
    const array = [1, 2, 3]
    const item = 2
    const fromIndex = 0
    expect(arrayIncludes(array, item, fromIndex)).toBe(true)
    expect(arrayIncludes(array, item, fromIndex)).toMatchSnapshot()
  })

  it('returns false if item is not included in array', () => {
    const array = [1, 2, 3]
    const item = 4
    const fromIndex = 0
    expect(arrayIncludes(array, item, fromIndex)).toBe(false)
    expect(arrayIncludes(array, item, fromIndex)).toMatchSnapshot()
  })

  it('returns true if item is included in array starting from a specific index', () => {
    const array = [1, 2, 3, 2]
    const item = 2
    const fromIndex = 2
    expect(arrayIncludes(array, item, fromIndex)).toBe(true)
    expect(arrayIncludes(array, item, fromIndex)).toMatchSnapshot()
  })

  it('returns false if item is not included in array starting from a specific index', () => {
    const array = [1, 2, 3, 2]
    const item = 2
    const fromIndex = 4
    expect(arrayIncludes(array, item, fromIndex)).toBe(false)
    expect(arrayIncludes(array, item, fromIndex)).toMatchSnapshot()
  })
})
