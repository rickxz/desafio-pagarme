import { Payable } from '../../entities/payable'
import { type Transaction } from '../../entities/transaction'
import { type PayablesRepository } from '../../repositories/payables/payables-repository'

type CreatePayableRequest = Transaction

type CreatePayableResponse = Payable

export class CreatePayable {
  constructor (
    private readonly payablesRepository: PayablesRepository
  ) {}

  async execute (transaction: CreatePayableRequest): Promise<CreatePayableResponse> {
    const payable = new Payable(transaction)

    await this.payablesRepository.create(payable)
    return payable
  }
}
