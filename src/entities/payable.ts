type PayableProps = {
    transaction_uuid: string
    status: string
    payment_date: Date
    fee: number
}

export class Payable {
    props: PayableProps;

    constructor(props: PayableProps) {
        this.props = props;
    }
}