import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Import the store
import '@fortawesome/fontawesome-free/css/all.css'
import FontAwesomeIcon from './font-awesome' // Import FontAwesomeIcon

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Register FontAwesomeIcon component

app.use(router)
app.use(store) // Use the store

app.mount('#app')