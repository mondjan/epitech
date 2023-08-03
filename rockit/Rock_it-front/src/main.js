import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createToaster } from 'vue-toast-notification'
//import 'vue-toastification/dist/index.css'

import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
// .use(createPinia())


// app.component ("font-awesome-icon", FontAwesomeIcon )
app.component ("font-awesome-icon", FontAwesomeIcon )



// createApp(App).component ("font-awesome-icon", FontAwesomeIcon ).mount("#app");





