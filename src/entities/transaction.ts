import { v4 as uuidv4 } from 'uuid'

export interface TransactionProps {
  value: number
  description: string
  paymentMethod: string
  cardNumber: string
  cardholder: string
  validity: Date
  cvv: number
}

export class Transaction {
  public readonly uuid: string
  private readonly props: TransactionProps

  constructor (props: TransactionProps) {
    const { cardNumber } = props
    this.props = props

    if (this.uuid == null) {
      this.uuid = uuidv4()
    }

    this.props.cardNumber = cardNumber.slice(-4)

    if (this.props.value <= 0) {
      throw new Error('value must be greather than zero')
    }

    const paymentMethods = ['debit_card', 'credit_card']

    if (!(paymentMethods.includes(this.props.paymentMethod))) {
      throw new Error('invalid payment method')
    }

    if (this.props.validity <= new Date()) {
      throw new Error('expired card')
    }
  }

  get cardNumber (): string {
    return this.props.cardNumber
  }

  get paymentMethod (): string {
    return this.props.paymentMethod
  }
}
