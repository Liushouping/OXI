// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  head: {
    // link: [
    //   { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'}
    // ],
    // script: [
    //   {
    //     type: 'text/javascript',
    //     src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    //   }
    // ]
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
