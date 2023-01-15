import { flattenArrayable } from './array'

/**
 * A function that takes in a number and rounds it to the nearest whole number.
 *
 * @function
 * @name roundTo
 * @kind variable
 * @param {number} n
 * @param {number} digits?
 * @returns {any}
 * @exports
 */
export const roundTo = (n: number, digits = 0): any => {
  let negative = false
  let number: any = n
  if (number < 0) {
    negative = true
    number *= -1
  }
  const multiplicator = 10 ** digits
  number = parseFloat((number * multiplicator).toFixed(11))
  number = (Math.round(number) / multiplicator).toFixed(2)
  if (negative) {
    number = (number * -1).toFixed(2)
  }

  return number
}

/**
 * A function that takes in a number and returns a string.
 *
 * @function
 * @name formatNumber
 * @kind variable
 * @param {number} n
 * @returns {string}
 * @exports
 */
export const formatNumber = (n: number): string => {
  const ranges = [
    { divider: 1e18, suffix: 'E' },
    { divider: 1e15, suffix: 'P' },
    { divider: 1e12, suffix: 'T' },
    { divider: 1e9, suffix: 'G' },
    { divider: 1e6, suffix: 'M' },
    { divider: 1e3, suffix: 'k' },
  ]

  for (const range of ranges) {
    if (n >= range.divider) {
      return (n / range.divider).toFixed(1).toString() + range.suffix
    }
  }

  return n.toString()
}

/**
 * A function that takes in an array of numbers and returns the sum of all the numbers in the array.
 *
 * @function
 * @name sum
 * @kind variable
 * @param {number[] | number[][]} ...args
 * @returns {number}
 * @exports
 */
export const sum = (...args: number[] | number[][]): number => {
  return flattenArrayable(args).reduce((a, b) => a + b, 0)
}

/**
 * Taking in a string and returning a string.
 *
 * @function
 * @name percentage
 * @kind variable
 * @param {string} value
 * @returns {string}
 * @exports
 */
export const percentage = (value: string): string =>
  `${parseFloat(value).toFixed(2)}%`

/**
 * A function that takes in a string and returns a boolean.
 *
 * @function
 * @name isValidInteger
 * @kind variable
 * @param {string} str
 * @returns {boolean}
 * @exports
 */
export const isValidInteger = (str: string): boolean => /^-?[\d]+$/g.test(str)

/**
 * Checking if the string is a valid float.
 *
 * @function
 * @name isValidFloat
 * @kind variable
 * @param {string} str
 * @returns {boolean}
 * @exports
 */
export const isValidFloat = (str: string): boolean =>
  /^-?[\d]+(\.[\d]+)$/g.test(str)

/**
 * Removing the leading zeros from a string.
 *
 * @function
 * @name removeLeadingZeros
 * @kind variable
 * @param {string} string
 * @returns {string}
 * @exports
 */
export const removeLeadingZeros = (string: string): string =>
  string.replace(/^(-?)0+(?!\.)(.+)/, '$1$2')

/**
 * A generic function that takes in a value and a separator and returns a string.
 *
 * @constant
 * @name addThousandSeparator
 * @kind variable
 * @type {<T = unknown>(value: T extends string ? string | number : string, separator: string) => string}
 * @exports
 */
export const addThousandSeparator = <T = unknown>(
  value: T extends string ? string | number : string,
  separator: string,
): string =>
  value.toString().replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`)

/**
 * Taking in a string and a number and returning a string.
 *
 * @function
 * @name numbersToCurrency
 * @kind variable
 * @param {string} numbers
 * @param {number} precision
 * @returns {string}
 * @exports
 */
export const numbersToCurrency = (
  numbers: string,
  precision: number,
): string => {
  numbers = numbers.padStart(precision + 1, '0')
  return precision === 0
    ? numbers
    : `${numbers.slice(0, -precision)}.${numbers.slice(-precision)}`
}

/**
 * It's a type guard function that takes in a value and returns a boolean.
 *
 * @function
 * @name isNumber
 * @kind variable
 * @param {any} val
 * @returns {val is number}
 * @exports
 */
export const isNumber = (val: any): val is number => typeof val === 'number'
