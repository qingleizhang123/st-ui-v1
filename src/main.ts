import { createApp } from 'vue'
import App from './App.vue'
import NanditVue from './packages/index'
const app = createApp(App)
app.use(NanditVue)
app.mount('#app')
