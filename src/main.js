import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'



const app = createApp(App)

registerPlugins(app)

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
