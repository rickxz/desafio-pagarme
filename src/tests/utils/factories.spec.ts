import { expect, test } from 'vitest'
import { TransactionFactory } from './factories'

test('generate a transaction factory with an overrided property', () => {
  const transaction = TransactionFactory({
    paymentMethod: 'debit_card'
  })

  expect(transaction.paymentMethod).toBe('debit_card')
})
