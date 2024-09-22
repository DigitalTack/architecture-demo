import '@/infrastructure/assets/main.css'

import { createApp } from 'vue'
import App from '@/infrastructure/App.vue'
import { router } from '@/infrastructure/routes'

import LoadProductsAction from '@/actions/LoadProductsAction'

import Bus from './infrastructure/bus'
import ProductApiRepository from './infrastructure/repositories/ProductApiRepository'
const bus = Bus.create()

bus.subscribe('products:load', async () => {
    const repository = new ProductApiRepository()
    const action = new LoadProductsAction(repository)
    const products = await action.execute()

    bus.publish('products:loaded', products)

})

const app = createApp(App)
app.use(router)

app.mount('#app')
