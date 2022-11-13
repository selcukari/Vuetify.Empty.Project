import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css';

import router from './router'
import store from './store'

// Plugins
import vuetify from './plugins/vuetify';

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
