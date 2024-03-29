export const capitalize = (str: string): string => str.toUpperCase()

export const sentenceCase = (string: string): string =>
  string?.replace(/(^(\w)|\s(\w))/g, (x) => x.toUpperCase())

export const truncate = (string: string, length = 30): string => {
  if (!string) {
    return string
  }
  if (string.toString().length > length) {
    return `${string.toString().substring(0, length)}......`
  }
  return string
}

export const replaceAt = (
  str: string,
  index: number,
  chr: string | number,
): string => {
  if (index > str.length - 1) return str
  return str.substring(0, index) + chr + str.substring(index + 1)
}

export const fromSlug = (str: string): string =>
  str
    .replace(/(^\w)/g, (g) => g[0].toUpperCase())
    .replace(/([-_]\w)/g, (g) => ' ' + g[1].toUpperCase())
    .trim()

export const toQuery = (params: Record<string, any>): string =>
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')
