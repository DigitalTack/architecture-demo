import type { Product } from '@/domain/entities/Product'
import type { Image } from '@/domain/entities/Image'
import type ProductRepository from '@/domain/repositories/ProductRepository'
import BaseApiRepository from './BaseApiRepository'

class ProductStore {
	private static instance: ProductStore | undefined
	private products: Array<Product>

	private constructor() {
		this.products = []
	}

	public static create(): ProductStore {
		if (!ProductStore.instance) {
			ProductStore.instance = new ProductStore()
		}

		return ProductStore.instance
	}

	public hasData(): boolean {
		return this.products.length > 0
	}

	public replaceAll(products: Array<Product>): void {
		this.products = products
	}

	public getAll(): Array<Product> {
		return this.products
	}
}

export default class ProductApiRepository extends BaseApiRepository implements ProductRepository {
	store: ProductStore

	constructor() {
		super()
		this.store = ProductStore.create()
	}

	async findAll(): Promise<Array<Product>> {
		if (!this.store.hasData()) {
			const products = await this.get('products')
			const productList = this.mapProducts(products)
			this.store.replaceAll(productList)
		}

		return this.store.getAll()
	}

	mapProducts(data: Record<string, any>[]): Array<Product> {
		const products = []
		for (const item of data['docs']) {
			const image: Image = {
				src: item.image.url,
				alt: item.image.alt
			}
			const product: Product = {
				name: item.name,
				image: image
			}
			products.push(product)
		}
		return products
	}
}
