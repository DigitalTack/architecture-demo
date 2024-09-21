import '@/infrastructure/assets/main.css'

import { createApp } from 'vue'
import App from '@/infrastructure/App.vue'
import { router } from '@/infrastructure/routes'

const app = createApp(App)
app.use(router)

app.mount('#app')
