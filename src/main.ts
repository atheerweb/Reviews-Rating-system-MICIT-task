import './assets/main.css'
import '@/plugins/ohVueIcons'
import { OhVueIcon } from 'oh-vue-icons'
import toastOptions from '@/plugins/vueToastify'
import Vue3Toastify from 'vue3-toastify'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(Vue3Toastify, toastOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
