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
 ];
 const dateObj = new Date(date);
 const month = monthNames[dateObj.getMonth()];
 const day = String(dateObj.getDate()).padStart(2, '0');
 const year = dateObj.getFullYear();

 return `${day} ${month}, ${year}`;
};

export const timestamp = () => Date.now();
