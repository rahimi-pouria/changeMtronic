// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // sass style
    '~/assets/css/main.css',
    '~/assets/keenicons/duotone/style.css',
    '~/assets/keenicons/outline/style.css',
    '~/assets/keenicons/solid/style.css',
    '~/assets/sass/core/layout/_base.scss',
    '~/assets/sass/style.scss'
    
  ]
})
