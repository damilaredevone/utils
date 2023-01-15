import { castArray } from './array'
import type { Fn } from './types'

/**
 * A function that takes in a value and a callback function. It then calls the callback function with the value and returns the value.
 *
 * @constant
 * @name tap
 * @kind variable
 * @type {<T>(value: T, callback?: ((value: T) => void) | undefined) => T}
 * @exports
 */
export const tap: <T>(
  value: T,
  callback?: ((value: T) => void) | undefined,
) => T = <T>(value: T, callback?: (value: T) => void): T => {
  if (isFunction<Fn>(callback)) {
    callback(value)
  }
  return value
}

/**
 * It's a function that takes in a function and returns the result of calling that function.
 *
 * @function
 * @name invoke
 * @kind variable
 * @param {Fn} fn
 * @returns {void}
 * @exports
 */
export const invoke = (fn: Fn): void => fn()

/**
 * It's a function that takes in an array of strings and returns a string.
 *
 * @function
 * @name classNames
 * @kind variable
 * @param {string[]} className
 * @returns {string}
 * @exports
 */
export const classNames = (className: string[]): string =>
  castArray<string>(className)?.filter(Boolean).join(' ')

/**
 * It's a type guard function that takes in a value and returns a boolean.
 *
 * @constant
 * @name notNullish
 * @kind variable
 * @type {<T>(v: T | null | undefined) => v is NonNullable<T>}
 * @exports
 */
export const notNullish: <T>(v: T | null | undefined) => v is NonNullable<T> = <
  T,
>(
  v: T | null | undefined,
): v is NonNullable<T> => v != null

/**
 * It's a type guard function that takes in a value and returns a boolean.
 *
 * @function
 * @name isObject
 * @kind variable
 * @param {unknown} value
 * @returns {value is object}
 * @exports
 */
export const isObject = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === '[object Object]'

/**
 * It's a type guard function that takes in a value and returns a boolean.
 *
 * @function
 * @name isBoolean
 * @kind variable
 * @param {any} val
 * @returns {val is boolean}
 * @exports
 */
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'

/**
 * It's a type guard function that takes in a value and returns a boolean.
 *
 * @function
 * @name isFunction
 * @kind variable
 * @param {any} val
 * @returns {<T extends Function>(val: any) => val is T}
 * @exports
 */
export const isFunction = <T extends Function>(val: any): val is T =>
  typeof val === 'function'

/**
 * It's a function that scrolls to the top of the page.
 *
 * @function
 * @name scrollTop
 * @kind variable
 * @returns {void}
 * @exports
 */
export const scrollTop = (): void =>
  window.scrollTo({ top: 0, behavior: 'smooth' })

/**
 * It's a type guard function that takes in a value and returns a boolean.
 *
 * @constant
 * @name isKeyOf
 * @kind variable
 * @type {<T extends object>(obj: T, k: keyof any) => k is keyof T}
 * @exports
 */
export const isKeyOf = <T extends object>(
  obj: T,
  k: keyof any,
): k is keyof T => {
  return k in obj
}

/**
 * It's a function that takes in a value and returns a boolean.
 *
 * @function
 * @name value
 * @kind variable
 * @param {unknown} value
 * @returns {value is unknown}
 * @exports
 */
export const value = (value: unknown): value is unknown =>
  typeof value === 'function' ? value() : value

/**
 * It's a function that takes in a string and returns a string.
 *
 * @function
 * @name toBase64
 * @kind variable
 * @param {string} str
 * @returns {string}
 * @exports
 */
export const toBase64 = (str: string): string =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

/**
 * It's a function that takes in a source object and an array of keys. It then returns a new object with the keys from the source object.
 *
 * @function
 * @name objectPick
 * @kind variable
 * @param {Record<string} source
 * @param {keys} any>
 * @param {any} string[]
 * @returns {Record<string, any>}
 * @exports
 */
export const objectPick = (
  source: Record<string, any>,
  keys: string[],
): Record<string, any> => {
  const obj: Record<string, any> = {}
  for (const key of keys) obj[key] = source[key]
  return obj
}

/**
 * A function that takes in a number and returns a string.
 *
 * @function
 * @name humanFileSize
 * @kind variable
 * @param {number} size
 * @returns {string}
 * @exports
 */
export const humanFileSize = (size: number): string => {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  const v = size / 1024 ** i

  return `${v.toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`
}
