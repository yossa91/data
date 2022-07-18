import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router/route.js'

createApp(App).mount('#app')
new VueElement({
    router,
    render:h => h(App)
}).$mount('#app')
