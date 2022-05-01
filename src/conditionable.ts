import type { Fn } from './types';

export const when = (
 value: boolean,
 callback?: Fn,
 defaultCallback?: Fn,
): void => {
 if (value) {
  return callback?.(this, value) ?? this;
 } else if (defaultCallback) {
  return defaultCallback?.(this, value);
 }

 return this;
};

export const unless = (
 value: boolean,
 callback?: Fn,
 defaultCallback?: Fn,
): void => {
 if (!value) {
  return callback?.(this, value) ?? this;
 } else if (defaultCallback) {
  return defaultCallback?.(this, value);
 }

 return this;
};
