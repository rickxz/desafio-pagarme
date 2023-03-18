import { type Transaction } from '../../entities/transaction'
import { type TransactionsRepository } from './transactions-repository'

export class InMemoryTransactionsRepository implements TransactionsRepository {
  public items: Transaction[] = []

  async create (transaction: Transaction): Promise<void> {
    this.items.push(transaction)
  }

  async list (): Promise<Transaction[]> {
    return this.items
  }

  async findById (id: string): Promise<Transaction | null> {
    const transaction = this.items.find(item => item.uuid === id)

    if (transaction == null) {
      return null
    }

    return transaction
  }
}
