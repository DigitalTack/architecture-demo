import { createMemoryHistory, createRouter } from 'vue-router'

import ProductListView from '@/infrastructure/views/ProductListView.vue'

const routes = [
	{
		path: '/',
		component: ProductListView
	}
]

const router = createRouter({
	history: createMemoryHistory(),
	routes
})

export { router }