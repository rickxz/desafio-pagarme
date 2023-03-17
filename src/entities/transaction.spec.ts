import { it, expect } from 'vitest'
import { Transaction } from './transaction'

import { TransactionFactory } from '../tests/utils/factories'

it('should create a transaction', () => {
  const transaction = TransactionFactory()

  expect(transaction).toBeInstanceOf(Transaction)
})

it('should not create a transaction with value lower or equal to zero', () => {
  expect(() => {
    TransactionFactory({ value: 0 })
  }).toThrow()

  expect(() => {
    TransactionFactory({ value: -1 })
  }).toThrow()
})

it('should not create a transaction with a payment method different from "debit_card" or "credit_card"', () => {
  expect(() => {
    TransactionFactory({ paymentMethod: 'debit' })
  }).toThrow()
})

it('should not create a transaction with a past validity date', () => {
  const pastDate = new Date()
  pastDate.setFullYear(pastDate.getFullYear() - 1)

  expect(() => {
    TransactionFactory({ validity: pastDate })
  }).toThrow()
})

it('should save and return only the 4 last digits of the credit card', () => {
  const transaction = TransactionFactory({ cardNumber: '1234 5678 9012 3456' })

  expect(transaction.cardNumber).toBe('3456')
})
