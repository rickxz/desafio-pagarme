import { Transaction } from "../../entities/transaction";
import { TransactionsRepository } from "../transactions-repository";

export class InMemoryTransactionsRepository implements TransactionsRepository {
    public items: Transaction[] = []

    async create(transaction: Transaction): Promise<void> {
        this.items.push(transaction)
    }

    async list(): Promise<Transaction[]> {
        return this.items
    }

    async findById(id: string): Promise<Transaction | null> {
        const transaction = this.items.find(item => item.uuid === id)

        if (!transaction) {
            return null
        }

        return transaction
    }
}