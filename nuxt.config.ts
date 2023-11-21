// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'OXI Oyster & Wine Live House | Taipei',
      meta: [
        { name: 'description', content: 'Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味' },
        { property: 'og:title', content: 'OXI Oyster & Wine Live House | Taipei' },
        { property: 'og:description', content: 'Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味' },
        { property: 'og:image', content: '/images/OXI-all.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    }
  },
  modules: ['nuxt-swiper'],
  swiper: {
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
