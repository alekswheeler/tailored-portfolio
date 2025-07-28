import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Vue Bootstrap
import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')
