import { type PayablesRepository } from '../../repositories/payables/payables-repository'

interface Balance {
  available: number
  waiting_funds: number
}

export class GetUserBalance {
  async execute (payablesRepository: PayablesRepository): Promise<Balance> {
    const payables = await payablesRepository.list()

    const balance: Balance = {
      available: 0,
      waiting_funds: 0
    }
    payables.forEach(payable => {
      if (payable.props.paymentDate <= new Date()) {
        balance.available += payable.transaction.value * (1 - payable.props.fee)
      } else {
        balance.waiting_funds += payable.transaction.value * (1 - payable.props.fee)
      }
    })

    return balance
  }
}
