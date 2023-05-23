import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Toast from  '../lib/main.js'

const app = createApp(App)
app.use(Toast)
app.mount('#app')
