import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css'
import { setupRouter } from './router'
import { setupStore } from '@/store'

function launchApp() {
    const app = createApp(App)

    // Configure router
    setupRouter(app)

    // Configure store
    setupStore(app)

    app.mount('#app')
}

launchApp()
