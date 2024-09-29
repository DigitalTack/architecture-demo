import type { Cart } from '@/domain/entities/Cart'
import type { ProductId } from '@/domain/entities/Product'

export default interface CartRepository {
  addProduct(id: ProductId, amount: number): void
  removeProduct(id: ProductId): void
	productExist(id: ProductId): boolean
	getProductAmount(id: ProductId): number
  get(): Cart
}
