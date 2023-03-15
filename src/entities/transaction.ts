export type TransactionProps = {
    value: number
    description: string
    paymentMethod: string
    cardNumber: string
    cardholder: string
    validity: Date
    cvv: number
}

export class Transaction {
    private props: TransactionProps

    constructor(props: TransactionProps) {
        const { cardNumber } = props

        this.props = props
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

    get cardNumber() {
        return this.props.cardNumber
    }

    get paymentMethod() {
        return this.props.paymentMethod
    }
}

