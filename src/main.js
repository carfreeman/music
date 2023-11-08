import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth, onAuthStateChanged } from './includes/firebase'
import i18n from './includes/i18n'

let app
//Se llama a este observador cada vez que cambia 
//el estado de acceso del usuario.
//Verificar si el usuario este autenticado
//cuando se inicia la aplicacion
onAuthStateChanged(auth, () => {
    if (!app) {
        app = createApp(App)
        const pinia = createPinia()
        
        app.use(pinia)
        app.use(router)
        app.use(VeeValidatePlugin)
        app.use(i18n)
        
        app.mount('#app')
    }
})
