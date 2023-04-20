import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

createApp(App).use(vuetify).mount('#app')
