import { setYear, parseISO } from 'date-fns'

/*
 * Receives 2020-11-06 and returns 2021-11-06
*/

export function getFutureDate(date: string) {
    const date_object = parseISO(date)
    return setYear(date_object, date_object.getFullYear() + 1)
}