import type { Image } from '@/domain/entities/Image'

export type ProductId = string

export type Product = {
	id: ProductId
	name: string
	image: Image
	price: number
}
