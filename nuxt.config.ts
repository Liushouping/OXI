// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
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
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' 
        },
        { 
          rel: 'apple-touch-icon', href: '/favicon.svg' 
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css",
        // },
      ],
      // script: [
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js",
      //     type: "text/javascript",
      //   },
      // ],
    },
  },
  modules: [
    'nuxt-swiper',
    '@stefanobartoletti/nuxt-social-share',
    '@vueuse/nuxt',
    'nuxt-gtag'
  ],
  gtag: {
    // id: ['G-123456','123123'],
    // config: {
    //   page_title: 'My Custom Page Title',

    // }
  },
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
