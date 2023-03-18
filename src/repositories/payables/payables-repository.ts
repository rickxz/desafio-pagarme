import { type Payable } from '../../entities/payable'

export interface PayablesRepository {
  create: (payable: Payable) => Promise<void>
  list: () => Promise<Payable[]>
}
