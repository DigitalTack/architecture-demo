import type { Product } from '@/domain/entities/Product'
import type ProductRepository from '@/domain/repositories/ProductRepository'

export default class LoadProductsActions {
	repository: ProductRepository

	constructor(repository: ProductRepository) {
		this.repository = repository
	}

	async execute(): Promise<Array<Product>> {
		const products = await this.repository.findAll()
		return products
	}
}
