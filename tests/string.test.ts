import { expectTypeOf } from 'vitest'
import { capitalize } from '../src'

describe('Capitalize', () => {
  it('capitalize method is defined', () => {
    expect(capitalize).toBeDefined()
  })

  it('return type should be string', () => {
    expectTypeOf(capitalize('John')).toBeString()
  })

  it('should capitalize string', () => {
    expect(capitalize('john')).toBe('JOHN')
    expect(capitalize('john')).toMatchSnapshot()
  })
})
