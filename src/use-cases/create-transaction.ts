import { Transaction } from "../entities/transaction"
import { TransactionsRepository } from "../repositories/transactions-repository"

interface CreateTransactionRequest {
    value: number
    description: string
    paymentMethod: string
    cardNumber: string
    cardholder: string
    validity: Date
    cvv: number
}

type CreateTransactionResponse = Transaction

export class CreateTransaction {
    constructor(
        private transactionRepository: TransactionsRepository
    ) {}

    async execute({ value, description, paymentMethod, cardNumber, cardholder, validity, cvv }: CreateTransactionRequest): Promise<CreateTransactionResponse> {
        const transaction = new Transaction({
            value,
            description,
            paymentMethod,
            cardNumber,
            cardholder,
            validity,
            cvv
        })

        this.transactionRepository.create(transaction)
        return transaction
    }
}