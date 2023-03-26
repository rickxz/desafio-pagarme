import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryPayablesRepository } from '../../repositories/payables/in-memory-payables-repository'
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
})
