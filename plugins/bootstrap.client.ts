import {defineNuxtPlugin} from "nuxt/app";
// @ts-ignore
import bootstrap from 'bootstrap/dist/js/bootstrap.min'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(bootstrap)
})
