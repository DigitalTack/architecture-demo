import '@/infrastructure/assets/main.css'

import { createApp } from 'vue'
import App from '@/infrastructure/App.vue'
import { router } from '@/infrastructure/routes'

import LoadProductsAction from '@/actions/LoadProductsAction'
import GetCartAction from '@/actions/GetCartAction'
import AddToCartAction from '@/actions/AddToCartAction'

import Bus from '@/infrastructure/bus'
import ProductApiRepository from '@/infrastructure/repositories/ProductApiRepository'
import CartMemoryRepository from '@/infrastructure/repositories/CartMemoryRepository'
const bus = Bus.create()

bus.subscribe('products:load', async () => {
	const repository = new ProductApiRepository()
	const action = new LoadProductsAction(repository)
	const products = await action.execute()

	bus.publish('products:loaded', products)
})

bus.subscribe('cart:get', () => {
	const repository = new CartMemoryRepository()
	const action = new GetCartAction(repository)
	const cart = action.execute()

	bus.publish('cart:updated', cart)
})

bus.subscribe('cart:add', (product) => {
	const repository = new CartMemoryRepository()
	const action = new AddToCartAction(repository)
	const cart = action.execute(product)

	bus.publish('cart:updated', cart)
})

const app = createApp(App)
app.use(router)

app.mount('#app')
