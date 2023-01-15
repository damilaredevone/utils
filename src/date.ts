export const formatDate = (date: string): string => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dateObj = new Date(date)
  const month = monthNames[dateObj.getMonth()]
  const day = String(dateObj.getDate()).padStart(2, '0')
  const year = dateObj.getFullYear()

  return `${day} ${month}, ${year}`
}

export const timestamp = (): number => Date.now()

export const getDaysInMonth = (
  month: number = new Date().getMonth(),
  year: number = new Date().getFullYear(),
): Date[] => {
  const date = new Date(year, month, 1)
  const days = [] as Date[]
  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return days
}
