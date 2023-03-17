import { describe, expect, test } from 'vitest'
import { PayableFactory } from '../tests/utils/factories'
import { Payable } from './payable'

describe('Payable Entity Unit Tests', () => {
  test('create a payable', () => {
    const payable = PayableFactory()

    expect(payable).toBeInstanceOf(Payable)
  })

  test('payable created from a debit card transaction should have status paid, payment date D+0 and fee of 0.03', () => {
    const payable = PayableFactory({
      paymentMethod: 'debit_card'
    })

    expect(payable.props.status).toBe('paid')
    expect(payable.props.paymentDate).toEqual(new Date())
    expect(payable.props.fee).toBe(0.03)
  })

  test('payable created from a credit card transaction should have status waiting_funds, payment date D+30 and fee of 0.05', () => {
    const future = new Date()
    future.setDate(future.getDate() + 30)

    const payable = PayableFactory({
      paymentMethod: 'credit_card'
    })

    expect(payable.props.status).toBe('waiting_funds')
    expect(payable.props.paymentDate.toDateString()).toEqual(future.toDateString())
    expect(payable.props.fee).toBe(0.05)
  })
})
