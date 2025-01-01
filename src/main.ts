import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FaStar, IoClose } from 'oh-vue-icons/icons'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import App from './App.vue'
import router from './router'

const app = createApp(App)

addIcons(FaStar, IoClose)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
