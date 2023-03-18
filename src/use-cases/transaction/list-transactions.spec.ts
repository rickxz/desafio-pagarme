import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTransactionsRepository } from '../../repositories/transactions/in-memory-transactions-repository'
import { getFutureDate } from '../../tests/utils/get-future-date'
import { CreateTransaction } from './create-transaction'
import { ListTransactions } from './list-transactions'

describe('List Transactions', () => {
  let transactionsRepository: InMemoryTransactionsRepository
  let createTransaction: CreateTransaction
  let listTransactions: ListTransactions

  beforeEach(() => {
    transactionsRepository = new InMemoryTransactionsRepository()
    createTransaction = new CreateTransaction(transactionsRepository)
    listTransactions = new ListTransactions()
  })

  it('should return an empty array if there are no transactions', async () => {
    const transactions = await listTransactions.execute(transactionsRepository)

    expect(transactions).toHaveLength(0)
  })

  it('should return a list of transactions', async () => {
    const transaction1 = await createTransaction.execute({
      value: 100,
      description: 'Test transaction',
      paymentMethod: 'credit_card',
      cardNumber: '1234 5678 9012 3456',
      cardholder: 'John Doe',
      validity: getFutureDate('2028-03-15'),
      cvv: 123
    })

    const transaction2 = await createTransaction.execute({
      value: 100,
      description: 'Test transaction',
      paymentMethod: 'credit_card',
      cardNumber: '1234 5678 9012 3456',
      cardholder: 'John Doe',
      validity: getFutureDate('2028-03-15'),
      cvv: 123
    })

    const transactions = await listTransactions.execute(transactionsRepository)

    expect(transactions).toEqual([transaction1, transaction2])
  })
})
