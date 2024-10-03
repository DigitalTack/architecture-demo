import { createMemoryHistory, createRouter } from 'vue-router'

import ProductListView from '@/infrastructure/views/ProductListView.vue'
import CartView from '@/infrastructure/views/CartView.vue'

const routes = [
	{
		path: '/',
		component: ProductListView
	},
	{
		path: '/cart',
		component: CartView
	},
]

const router = createRouter({
	history: createMemoryHistory(),
	routes
})

export { router }