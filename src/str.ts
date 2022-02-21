export const capitalize = (str: string): string => str.toUpperCase();

export const sentenceCase = (string: string): string =>
 string?.replace(/(^(\w)|\s(\w))/g, (x) => x.toUpperCase());

export const truncate = (string: string, length = 30): string => {
 if (!string) {
  return string;
 }
 if (string.toString().length > length) {
  return `${string.toString().substring(0, length)}......`;
 }
 return string;
};
