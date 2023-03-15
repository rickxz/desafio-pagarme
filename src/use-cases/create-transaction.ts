import { Transaction } from "../entities/transaction"

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

        return transaction
    }
}