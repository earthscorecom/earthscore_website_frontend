import './assets/main.css'
import './assets/css/landing.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { i18n } from './plugins/i18n/i18n'

createApp(App).use(i18n).use(router).mount('#app')
