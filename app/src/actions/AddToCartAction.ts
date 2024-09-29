import type CartRepository from '@/domain/repositories/CartRepository'
import type { ProductId } from '@/domain/entities/Product'
import AddToCartService from '@/domain/services/AddToCartService'

export default class AddToCartAction {
  repository: CartRepository

  constructor(repository: CartRepository) {
    this.repository = repository
  }

  execute(product: ProductId) {
    const service = new AddToCartService(this.repository)
    service.execute(product)

    return this.repository.get()
  }
}
