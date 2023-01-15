import { expectTypeOf } from 'vitest'
import { omit } from '../src'

describe('omit', () => {
  it('should be defined', () => {
    expect(omit).toBeDefined()
  })

  it('should return a new object with the specified keys omitted', () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 }
    const keys = ['b', 'd']
    const result = omit(keys, obj)

    expect(result).toEqual({ a: 1, c: 3 })
  })

  it('should match snapshot', () => {
    const result = omit(['b', 'd'], { a: 1, b: 2, c: 3, d: 5 })
    expect(result).toMatchSnapshot()
  })

  it('return types should be object', () => {
    expectTypeOf(omit).toBeObject()
    expectTypeOf(omit).parameter(1).toMatchTypeOf<Record<string, unknown>>()
  })
})
