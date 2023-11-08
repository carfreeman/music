import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

export default createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en', // set locale
    fallbackLocale: 'pt', // set fallback locale
    messages: {
        en,
        pt
    } // set locale messages
})