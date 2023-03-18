import { Transaction } from '../../entities/transaction'
import { type TransactionsRepository } from '../../repositories/transactions/transactions-repository'

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
  constructor (
    private readonly transactionsRepository: TransactionsRepository
  ) {}

  async execute ({ value, description, paymentMethod, cardNumber, cardholder, validity, cvv }: CreateTransactionRequest): Promise<CreateTransactionResponse> {
    const transaction = new Transaction({
      value,
      description,
      paymentMethod,
      cardNumber,
      cardholder,
      validity,
      cvv
    })

    await this.transactionsRepository.create(transaction)
    return transaction
  }
}
