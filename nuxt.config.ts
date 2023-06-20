import postcss from './postcss.config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
  ],
  postcss,
  telemetry: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
