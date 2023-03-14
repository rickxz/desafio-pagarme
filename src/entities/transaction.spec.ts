import { it, expect } from 'vitest'
import { Transaction } from './transaction'

import { getFutureDate } from '../tests/utils/get-future-date'

it('should create a transaction', () => {
    const transaction = new Transaction({
        value: 100,
        description: 'amazing product',
        paymentMethod: 'debit_card',
        cardNumber: '1234567890',
        cardholder: 'john doe',
        validity: getFutureDate('2022-03-14'),
        cvv: 123
    })

    expect(transaction).toBeInstanceOf(Transaction)
})

it('should not create a transaction with value lower or equal to zero', () => {

    expect(() => {
        new Transaction({
            value: 0,
            description: 'amazing product',
            paymentMethod: 'debit_card',
            cardNumber: '1234567890',
            cardholder: 'john doe',
            validity: getFutureDate('2022-03-14'),
            cvv: 123
        })
    }).toThrow()

    expect(() => {
        new Transaction({
            value: -1,
            description: 'amazing product',
            paymentMethod: 'debit_card',
            cardNumber: '1234567890',
            cardholder: 'john doe',
            validity: getFutureDate('2022-03-14'),
            cvv: 123
        })
    }).toThrow()
})