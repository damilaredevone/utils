import { Nullable, Arrayable } from './types';

export const castArray = <T>(array?: Nullable<Arrayable<T>>): Array<T> => {
 array = array || [];
 if (Array.isArray(array)) return array;
 return [array];
};

export const flattenArrayable = <T>(
 array?: Nullable<Arrayable<T | Array<T>>>,
): Array<T> => {
 return castArray(array).flat(1) as Array<T>;
};
