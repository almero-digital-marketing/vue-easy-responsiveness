import { createApp } from 'vue'
import App from './App.vue'
import responsiveness from './lib/responsiveness'

import Responsive from './components/Responsive.vue'
import Grid from './components/Grid.vue'

createApp(App)
.use(responsiveness)
.component('responsive', Responsive)
.component('grid', Grid)
.mount('#app')
