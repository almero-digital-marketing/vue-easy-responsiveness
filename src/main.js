import { createApp } from 'vue'
import App from './App.vue'
import responsiveness from './lib/responsiveness'

createApp(App).use(responsiveness).mount('#app')
