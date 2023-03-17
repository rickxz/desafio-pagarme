import { Payable, type PayableProps } from '../../entities/payable'
import { Transaction, type TransactionProps } from '../../entities/transaction'
import { getFutureDate } from './get-future-date'

type TransactionFactoryOverrides = Partial<TransactionProps>

export const TransactionFactory = (overrides?: TransactionFactoryOverrides): Transaction => {
  const defaultProps: TransactionProps = {
    value: 100,
    description: 'Test transaction',
    paymentMethod: 'credit_card',
    cardNumber: '1234 5678 9012 3456',
    cardholder: 'John Doe',
    validity: getFutureDate('2028-03-15'),
    cvv: 123
  }

  const props = { ...defaultProps, ...overrides }
  return new Transaction(props)
}

type PayableFactoryOverrides = Partial<PayableProps>

export const PayableFactory = (overrides?: PayableFactoryOverrides): Payable => {
  const transaction = TransactionFactory()

  const payable = new Payable(transaction)

  return payable
}
