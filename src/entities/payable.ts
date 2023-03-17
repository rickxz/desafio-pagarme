export interface PayableProps {
  transactionUUID: string
  status: string
  paymentDate: Date
  fee: number
}

export class Payable {
  props: PayableProps

  constructor (props: PayableProps) {
    this.props = props
  }
}
