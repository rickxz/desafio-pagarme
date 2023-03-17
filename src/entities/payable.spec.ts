import { describe, expect, test } from 'vitest'
import { PayableFactory } from '../tests/utils/factories'
import { Payable } from './payable'

describe('Payable Entity Unit Tests', () => {
  test('create a payable', () => {
    const payable = PayableFactory()

    console.log(payable)
    expect(payable).toBeInstanceOf(Payable)
  })
})
