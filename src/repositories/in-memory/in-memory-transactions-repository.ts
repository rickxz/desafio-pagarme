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
}