import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './assets/css/style.scss'

createApp(App).use(store).use(router).use(router).mount('#app')
