import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth, onAuthStateChanged } from './includes/firebase'

let app
//Se llama a este observador cada vez que cambia 
//el estado de acceso del usuario.
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App)
        const pinia = createPinia()
        
        app.use(pinia)
        app.use(router)
        app.use(VeeValidatePlugin)
        
        app.mount('#app')
    }
})
