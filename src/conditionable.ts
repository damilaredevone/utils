import type { Fn } from './types'

export const when = (
  value: boolean,
  callback?: Fn,
  defaultCallback?: Fn,
): void => {
  if (value) {
    return callback?.()
  } else if (defaultCallback) {
    return defaultCallback?.()
  }
}

export const unless = (
  value: boolean,
  callback?: Fn,
  defaultCallback?: Fn,
): void => {
  if (!value) {
    return callback?.()
  } else if (defaultCallback) {
    return defaultCallback?.()
  }
}
