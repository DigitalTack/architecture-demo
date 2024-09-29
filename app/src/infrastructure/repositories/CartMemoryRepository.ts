import type CartRepository from '@/domain/repositories/CartRepository'
import type { ProductId } from '@/domain/entities/Product'
import type { Cart } from '@/domain/entities/Cart'

class CartStore {
	private static instance: CartStore | undefined
	private cart: Cart

	private constructor() {
		this.cart = {}
	}

	public static create(): CartStore {
		if (!CartStore.instance) {
			CartStore.instance = new CartStore()
		}

		return CartStore.instance
	}

	public add(id: ProductId, amount: number): void {
		this.cart[id] = amount
	}

	public get(): Cart {
		return this.cart
	}
}

export default class CartMemoryRepository implements CartRepository {
  store: CartStore

  constructor() {
    this.store = CartStore.create()
  }

  addProduct(id: ProductId, amount: number): void {
		this.store.add(id, amount)
  }

  removeProduct(id: ProductId): void {

  }

	productExist(id: ProductId): boolean {
		return id in this.store.get()
	}

	getProductAmount(id: ProductId): number {
		return this.store.get()[id]
	}

  get() {
    return this.store.get()
  }
}