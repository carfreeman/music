import './assets/base.css'
import './assets/main.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'
import i18n from './includes/i18n'
import { registerSW } from 'virtual:pwa-register'
import progressBar from './includes/progress-bar'

registerSW({ immediate: true})
progressBar(router)

let app
//Se llama a este observador cada vez que cambia 
//el estado de acceso del usuario.
//Verificar si el usuario este autenticado
//cuando se inicia la aplicacion
auth.onAuthStateChanged(() => {
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
