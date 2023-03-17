import { type Transaction } from './transaction'

export interface PayableProps {
  status: string
  paymentDate: Date
  fee: number
}

const DEFAULT_PAYABLE_PROPS: PayableProps = {
  status: 'waiting_funds',
  paymentDate: new Date(),
  fee: 0.5
}

export class Payable {
  public readonly transaction: Transaction
  public props: PayableProps

  constructor (transaction: Transaction) {
    this.transaction = transaction
    this.props = { ...DEFAULT_PAYABLE_PROPS }
    this.setFromTransaction(transaction)
  }

  setFromTransaction (transaction: Transaction): void {
    const paymentMethod = transaction.paymentMethod
    if (paymentMethod === 'debit_card') {
      this.props.status = 'paid'
      this.props.paymentDate = new Date()
      this.props.fee = 0.03
    } else {
      const future = new Date()
      future.setDate(future.getDate() + 30)
      this.props.status = 'waiting_funds'
      this.props.paymentDate = future
      this.props.fee = 0.05
    }
  }
}
