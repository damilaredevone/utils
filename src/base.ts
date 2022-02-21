import { castArray } from './array';

export const tap = <T>(value: T, callback?: (value: T) => void): T => {
 callback(value);
 return value;
};

export const classNames = (className: string[]): string =>
 castArray<string>(className)?.filter(Boolean).join(' ');

export const notNullish = <T>(v: T | null | undefined): v is NonNullable<T> =>
 v != null;

export const isObject = (value: unknown): boolean =>
 Object.prototype.toString.call(value) === '[object Object]';

export const scrollTop = (): void =>
 window.scrollTo({ top: 0, behavior: 'smooth' });
