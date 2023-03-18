import { type Payable } from '../../entities/payable'
import { type PayablesRepository } from './payables-repository'

export class InMemoryPayablesRepository implements PayablesRepository {
  public items: Payable[] = []

  async create (payable: Payable): Promise<void> {
    this.items.push(payable)
  }

  async list (): Promise<Payable[]> {
    return this.items
  }
}
