import { describe, expect, it } from 'vitest'
import { InMemoryPayablesRepository } from '../../repositories/payables/in-memory-payables-repository'
import { TransactionFactory } from '../../tests/utils/factories'
import { CreatePayable } from './create-payable'

describe('Create Payable', () => {
  it('should be able to create a payable from a transaction', async () => {
    const payableRepository = new InMemoryPayablesRepository()
    const createPayable = new CreatePayable(payableRepository)

    const transaction = TransactionFactory()

    await createPayable.execute(transaction)

    expect(payableRepository.items).toHaveLength(1)
  })
})
