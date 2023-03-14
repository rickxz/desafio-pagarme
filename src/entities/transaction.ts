type TransactionProps = {
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
        this.props = props

        if (this.props.value <= 0) {
            throw new Error('value must be greather than zero')
        }
    }
}

