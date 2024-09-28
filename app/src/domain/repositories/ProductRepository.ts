import type { Product } from '../entities/Product'

export default interface ProductRepository {
	findAll(): Promise<Array<Product>>
}
