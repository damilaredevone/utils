import { flattenArrayable } from './array';

export const roundTo = (n: number, digits = 0): any => {
 let negative = false;
 let number: any = n;
 if (number < 0) {
  negative = true;
  number *= -1;
 }
 const multiplicator = 10 ** digits;
 number = parseFloat((number * multiplicator).toFixed(11));
 number = (Math.round(number) / multiplicator).toFixed(2);
 if (negative) {
  number = (number * -1).toFixed(2);
 }

 return number;
};

export const formatNumber = (n: number): string => {
 const ranges = [
  { divider: 1e18, suffix: 'E' },
  { divider: 1e15, suffix: 'P' },
  { divider: 1e12, suffix: 'T' },
  { divider: 1e9, suffix: 'G' },
  { divider: 1e6, suffix: 'M' },
  { divider: 1e3, suffix: 'k' },
 ];

 for (const range of ranges) {
  if (n >= range.divider) {
   return (n / range.divider).toFixed(1).toString() + range.suffix;
  }
 }

 return n.toString();
};

export const sum = (...args: number[] | number[][]) => {
 return flattenArrayable(args).reduce((a, b) => a + b, 0);
};

export const percentage = (value: string): string =>
 `${parseFloat(value).toFixed(2)}%`;
