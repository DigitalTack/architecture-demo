import type { Product } from '@/domain/entities/Product'

export default interface ProductRepository {
	findAll(): Promise<Array<Product>>
}
