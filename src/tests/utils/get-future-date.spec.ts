import { expect, test } from 'vitest'
import { getFutureDate } from './get-future-date'

test('increases date by one year', () => {
  expect(getFutureDate('2022-11-06').getFullYear()).toEqual(2023)
})
