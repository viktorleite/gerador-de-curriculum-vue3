import  { createApp }  from 'vue'
import { store } from './store/store'

// import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import App from './App.vue'

createApp(App).use(store).mount('#app')