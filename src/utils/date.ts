export function getDateString(date: Date): string {
  const year = date.getFullYear();
  let month: number = date.getMonth() + 1; // Month is zero-based, so we add 1
  let day: number = date.getDate();
  let dateString = `${year}-`;

  // add leading zeros if month or day is less than 10
  dateString += month < 10 ? `0${month}-` : `${month}`
  dateString += day < 10 ? `0${day}-` : `${day}`

  return dateString;
}
