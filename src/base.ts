import { castArray } from './array';

export const tap = <T>(value: T, callback?: (value: T) => void): T => {
 callback(value);
 return value;
};

export const classNames = (className: string[]): string =>
 castArray<string>(className)?.filter(Boolean).join(' ');

export const notNullish = <T>(v: T | null | undefined): v is NonNullable<T> =>
 v != null;

export const isObject = (value: unknown): value is boolean =>
 Object.prototype.toString.call(value) === '[object Object]';

export const isBoolean = (val: any): val is boolean => typeof val === 'boolean';

export const isFunction = <T extends Function>(val: any): val is T =>
 typeof val === 'function';

export const isNumber = (val: any): val is number => typeof val === 'number';

export const scrollTop = (): void =>
 window.scrollTo({ top: 0, behavior: 'smooth' });
