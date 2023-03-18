import { describe, expect, it } from 'vitest'
import { InMemoryTransactionsRepository } from '../../repositories/transactions/in-memory-transactions-repository'
import { getFutureDate } from '../../tests/utils/get-future-date'
import { CreateTransaction } from './create-transaction'

describe('Create Transaction', () => {
  it('should create a transaction', async () => {
    const transactionsRepository = new InMemoryTransactionsRepository()
    const createTransaction = new CreateTransaction(transactionsRepository)

    await createTransaction.execute({
      value: 100,
      description: 'Test transaction',
      paymentMethod: 'credit_card',
      cardNumber: '1234 5678 9012 3456',
      cardholder: 'John Doe',
      validity: getFutureDate('2028-03-15'),
      cvv: 123
    })

    expect(transactionsRepository.items).toHaveLength(1)
  })
})
