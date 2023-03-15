import { it, expect } from 'vitest'
import { Transaction } from './transaction'

import { getFutureDate } from '../tests/utils/get-future-date'
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
    const past_date = new Date()
    past_date.setFullYear(past_date.getFullYear() - 1)
    
    expect(() => {
        TransactionFactory({ validity: past_date })
    }).toThrow()
})

it('should save and return only the 4 last digits of the credit card', () => {
    const transaction = TransactionFactory({ cardNumber: '1234 5678 9012 3456'})

    expect(transaction.cardNumber).toBe('3456')
})