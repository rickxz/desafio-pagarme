import { setYear, parseISO } from 'date-fns'

/*
 * Receives 2020-11-06 and returns 2021-11-06
*/

export function getFutureDate (date: string): Date {
  const dateObject = parseISO(date)
  return setYear(dateObject, dateObject.getFullYear() + 1)
}
