import { type Transaction } from '../entities/transaction'
import { type TransactionsRepository } from '../repositories/transactions-repository'

export class ListTransactions {
  async execute (transactionsRepository: TransactionsRepository): Promise<Transaction[]> {
    const transactions = await transactionsRepository.list()
    return transactions
  }
}
