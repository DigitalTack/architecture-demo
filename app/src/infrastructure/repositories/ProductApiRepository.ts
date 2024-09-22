import type { Product } from "@/domain/entities/Product";
import type { Image } from "@/domain/entities/Image";
import type ProductRepository from "@/domain/repositories/ProductRepository";
import BaseApiRepository from "./BaseApiRepository";

export default class ProductApiRepository extends BaseApiRepository implements ProductRepository {
    async findAll(): Promise<Array<Product>> {
       const products = await this.get('products')
       return this.mapProducts(products)
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