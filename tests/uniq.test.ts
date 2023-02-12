import { uniq } from '../src'

describe('ArrayUnique', () => {
  it('returns unique if items has double', () => {
    const array = [1, 2, 3, 3, 5]

    expect(uniq(array)).toEqual([1, 2, 3, 5])
  })

  it('returns input for an empty array', () => {
    const array: number[] = []

    expect(uniq(array)).toEqual([])
  })

  it('doesnt change if no unique items are present', () => {
    const array = [1, 2, 3]

    expect(uniq(array)).toEqual([1, 2, 3])
  })
})
