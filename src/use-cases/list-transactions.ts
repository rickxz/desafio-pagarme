import { Transaction } from "../entities/transaction";
import { TransactionsRepository } from "../repositories/transactions-repository";

export class ListTransactions {
    async execute(transactionsRepository: TransactionsRepository): Promise<Transaction[]> {
        const transactions = await transactionsRepository.list();
        return transactions;
    }
}