import { type Transaction } from '../../entities/transaction'

export interface TransactionsRepository {
  create: (transaction: Transaction) => Promise<void>
  list: () => Promise<Transaction[]>
  findById: (id: string) => Promise<Transaction | null>
}
