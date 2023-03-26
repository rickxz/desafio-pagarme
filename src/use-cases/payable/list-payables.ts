import { type Payable } from '../../entities/payable'
import { type PayablesRepository } from '../../repositories/payables/payables-repository'

export class ListPayables {
  async execute (payablesRepository: PayablesRepository): Promise<Payable[]> {
    const payables = await payablesRepository.list()
    return payables
  }
}
