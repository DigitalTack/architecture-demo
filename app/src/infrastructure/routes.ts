import { createMemoryHistory, createRouter } from 'vue-router'

import ProductListPage from '@/infrastructure/pages/ProductListPage.vue'

const routes = [
    {
        path: '/',
        component: ProductListPage
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export { router }