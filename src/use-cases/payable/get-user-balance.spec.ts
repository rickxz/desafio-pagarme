import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryPayablesRepository } from '../../repositories/payables/in-memory-payables-repository'
import { TransactionFactory } from '../../tests/utils/factories'
import { CreatePayable } from './create-payable'
import { GetUserBalance } from './get-user-balance'

describe('Get User Balance', () => {
  let payablesRepository: InMemoryPayablesRepository
  let createPayable: CreatePayable
  let getUserBalance: GetUserBalance

  beforeEach(() => {
    payablesRepository = new InMemoryPayablesRepository()
    createPayable = new CreatePayable(payablesRepository)
    getUserBalance = new GetUserBalance()
  })

  it('should return user balance', async () => {
    const transaction1 = TransactionFactory({ paymentMethod: 'debit_card', value: 100 })
    const transaction2 = TransactionFactory({ paymentMethod: 'credit_card', value: 100 })

    await createPayable.execute(transaction1)
    await createPayable.execute(transaction2)

    const userBalance = await getUserBalance.execute(payablesRepository)

    expect(userBalance.available).toBe(97)
    expect(userBalance.waiting_funds).toBe(95)
  })
})
