import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

import '@/assets/main.css'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


let app

// waits for firebase to authenticate user 
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App).use(router)
        app.component('Datepicker', Datepicker);
        app.mount('#app')
    }
})
