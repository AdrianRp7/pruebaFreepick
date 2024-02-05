import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import helpers from '@/plugins/helpers.js';


import '@/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(helpers)
app.mount('#app')
