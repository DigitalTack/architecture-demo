import type CartRepository from '@/domain/repositories/CartRepository'
import type { ProductId } from '@/domain/entities/Product'

export default class AddToCartService {
  repository: CartRepository

  constructor(repository: CartRepository) {
    this.repository = repository
  }

  execute(product: ProductId, amount: number = 1) {
    if (this.repository.productExist(product)) {
      const currentAmount = this.repository.getProductAmount(product)
      amount += currentAmount
    }
    this.repository.addProduct(product, amount)
  }
}