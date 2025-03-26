import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Import the store
import '@fortawesome/fontawesome-free/css/all.css'

    
const app = createApp(App)

app.use(router)
app.use(store) // Use the store


app.mount('#app')
