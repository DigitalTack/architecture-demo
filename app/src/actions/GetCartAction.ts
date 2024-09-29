import type CartRepository from '@/domain/repositories/CartRepository'

export default class GetCartAction {
  repository: CartRepository

  constructor(repository: CartRepository) {
    this.repository = repository
  }

  execute() {
    return this.repository.get()
  }
}