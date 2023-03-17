import { expect, test } from 'vitest'
import { PayableFactory, TransactionFactory } from './factories'

test('generate a transaction factory with an overrided property', () => {
  const transaction = TransactionFactory({
    paymentMethod: 'debit_card'
  })

  expect(transaction.paymentMethod).toBe('debit_card')
})

test('generate a payable factory with a transaction overrided property', () => {
  const payable = PayableFactory({
    paymentMethod: 'debit_card'
  })

  console.log(payable)
  expect(payable.transaction.paymentMethod).toBe('debit_card')
})
