import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryPayablesRepository } from '../../repositories/payables/in-memory-payables-repository'
import { TransactionFactory } from '../../tests/utils/factories'
import { CreatePayable } from './create-payable'
import { ListPayables } from './list-payables'

describe('List Payables', () => {
  let payablesRepository: InMemoryPayablesRepository
  let createPayable: CreatePayable
  let listPayables: ListPayables

  beforeEach(() => {
    payablesRepository = new InMemoryPayablesRepository()
    createPayable = new CreatePayable(payablesRepository)
    listPayables = new ListPayables()
  })

  it('should return empty array if there are no payables', async () => {
    const payables = await listPayables.execute(payablesRepository)
    expect(payables).toHaveLength(0)
  })

  it('should return a list of payables', async () => {
    const transaction1 = TransactionFactory()
    const transaction2 = TransactionFactory({ paymentMethod: 'debit_card' })

    const payable1 = await createPayable.execute(transaction1)
    const payable2 = await createPayable.execute(transaction2)

    const payables = await listPayables.execute(payablesRepository)
    expect(payables).toEqual([payable1, payable2])
  })
})
