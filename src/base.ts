import { castArray } from './array';
import { Fn } from './types';

export const tap = <T>(value: T, callback?: (value: T) => void): T => {
 if (isFunction<Fn>(callback)) {
  callback(value);
 }
 return value;
};

export const invoke = (fn: Fn) => fn();

export const classNames = (className: string[]): string =>
 castArray<string>(className)?.filter(Boolean).join(' ');

export const notNullish = <T>(v: T | null | undefined): v is NonNullable<T> =>
 v != null;

export const isObject = (value: unknown): value is object =>
 Object.prototype.toString.call(value) === '[object Object]';

export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

export const isFunction = <T extends Function>(val: any): val is T =>
 typeof val === 'function';

export const isNumber = (val: any): val is number => typeof val === 'number';

export const scrollTop = (): void =>
 window.scrollTo({ top: 0, behavior: 'smooth' });

export const isKeyOf = <T extends object>(
 obj: T,
 k: keyof any,
): k is keyof T => {
 return k in obj;
};

/**
 * @param  {unknown} value
 * @returns valueisunknown
 */
export const value = (value: unknown): value is unknown =>
 typeof value === 'function' ? value() : value;

/**
 * @param  {string} str
 * @returns string
 */
export const toBase64 = (str: string): string =>
 typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str);
