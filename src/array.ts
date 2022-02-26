import { Nullable, Arrayable } from './types';

export const castArray = <T>(array?: Nullable<Arrayable<T>>): Array<T> => {
 array = array || [];
 if (Array.isArray(array)) return array;
 return [array];
};

export const flattenArrayable = <T>(
 array?: Nullable<Arrayable<T | Array<T>>>,
): Array<T> => castArray(array).flat(1) as Array<T>;

export const last = <T>(array: readonly T[]): T | undefined =>
 position(array, -1);

export const position = <T>(
 array: readonly T[] | [],
 index: number,
): T | undefined => {
 const len = array.length;
 if (!len) return undefined;

 if (index < 0) index += len;

 return array[index];
};

export const arrayIncludes = <T>(
 array: T[] | readonly T[],
 item: unknown,
 fromIndex?: number,
): item is T => {
 return array.includes(item as T, fromIndex);
};
