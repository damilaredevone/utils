import type { Nullable, Arrayable } from './types'

/**
 * A type guard.
 *
 * @constant
 * @name castArray
 * @kind variable
 * @type {<T>(array?: Nullable<Arrayable<T>>) => T[]}
 * @exports
 */
export const castArray = <T>(array?: Nullable<Arrayable<T>>): Array<T> => {
  array = array || []
  if (Array.isArray(array)) return array
  return [array]
}

/**
 * A type guard.
 *
 * @constant
 * @name flattenArrayable
 * @kind variable
 * @type {<T>(array?: Nullable<Arrayable<T | T[]>>) => T[]}
 * @exports
 */
export const flattenArrayable = <T>(
  array?: Nullable<Arrayable<T | Array<T>>>,
): Array<T> => castArray(array).flat(1) as Array<T>

/**
 * Returns the last element in an array.
 *
 * @constant
 * @name last
 * @kind variable
 * @type {<T>(array: readonly T[]) => T | undefined}
 * @exports
 */
export const last = <T>(array: readonly T[]): T | undefined =>
  position(array, -1)

/**
 * Returns the first element in an array.
 *
 * @constant
 * @name first
 * @kind variable
 * @type {<T>(array: readonly T[]) => T | undefined}
 * @exports
 */
export const first = <T>(array: readonly T[]): T | undefined =>
  position(array, 0)

/**
 * Returns an element at a certian position using the index.
 *
 * @constant
 * @name position
 * @kind variable
 * @type {<T>(array: [] | readonly T[], index: number) => T | undefined}
 * @exports
 */
export const position = <T>(
  array: readonly T[] | [],
  index: number,
): T | undefined => {
  const len = array.length
  if (!len) return undefined

  if (index < 0) index += len

  return array[index]
}

/**
 * A type guard.
 *
 * @constant
 * @name arrayIncludes
 * @kind variable
 * @type {<T>(array: T[] | readonly T[], item: unknown, fromIndex?: number) => item is T}
 * @exports
 */
export const arrayIncludes = <T>(
  array: T[] | readonly T[],
  item: unknown,
  fromIndex?: number,
): item is T => {
  return array.includes(item as T, fromIndex)
}

/**
 * A function that takes three arguments, `array`, `fromIndex`, and `toIndex`. It returns `void`.
 *
 * @constant
 * @name arrayMoveMutable
 * @kind variable
 * @type {<T>(array: Arrayable<T>[], fromIndex: number, toIndex: number) => void}
 * @exports
 */
export const arrayMoveMutable = <T>(
  array: Arrayable<T>[],
  fromIndex: number,
  toIndex: number,
): void => {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex

    const [item] = array.splice(fromIndex, 1)
    array.splice(endIndex, 0, item)
  }
}

/**
 * A function that takes two arguments, `keys` and `obj`. It returns a new object that is a copy of `obj` but without the keys in `keys`.
 *
 * @constant
 * @name arrayMoveImmutable
 * @kind variable
 * @type {<T>(array: Arrayable<T>[], fromIndex: number, toIndex: number) => Arrayable<T>[]}
 * @exports
 */
export const arrayMoveImmutable = <T>(
  array: Arrayable<T>[],
  fromIndex: number,
  toIndex: number,
): Arrayable<T>[] => {
  const newArray = [...array]
  arrayMoveMutable(newArray, fromIndex, toIndex)

  return newArray
}

/**
 * A function that takes two arguments, `keys` and `obj`. It returns a new object that is a copy of `obj` but without the keys in `keys`.
 *
 * @constant
 * @name omit
 * @kind variable
 * @type {<T>(keys: T[], obj: Record<string, unknown>) => { [k: string]: unknown; }}
 * @exports
 */
export const omit = <T>(
  keys: Array<T>,
  obj: Record<string, unknown>,
): { [k: string]: unknown } =>
  Object.fromEntries(
    Object.entries(obj).filter(([k]: any) => !keys.includes(k)),
  )

export const uniq = <T extends any[]>(a: T): T[] => {
  return Array.from(new Set(a))
}
