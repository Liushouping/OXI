// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  site: {
    url: 'https://oxi.taipei',
    name: 'OXI Oyster & Wine Live House | Taipei',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'OXI Oyster & Wine Live House | Taipei',
      meta: [
        { name: 'description', content: 'Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味' },
        { property: 'og:title', content: 'OXI Oyster & Wine Live House | Taipei' },
        { property: 'og:description', content: 'Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味' },
        { property: 'og:image', content: '/images/welcome_3.webp' }
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/favicon.svg' 
        },
        { 
          rel: 'apple-touch-icon', 
          href: '/favicon.svg' 
        },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.googleapis.com' 
        },
        { 
          rel: 'preconnect', 
          href: 'https://fonts.gstatic.com', 
          crossorigin: true 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Anton&family=Noto+Serif+TC:wght@300;500;900&display=swap' 
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css",
        },
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js",
          defer: true
        },
      ],
    },
  },
  modules: [
    '@bluesyoung/nuxt3-lazy-load',
    'nuxt-swiper',
    '@stefanobartoletti/nuxt-social-share',
    '@vueuse/nuxt',
    'nuxt-gtag',
    '@nuxtjs/sitemap'
  ],
  '@bluesyoung/nuxt3-lazy-load': {
    
  },
  gtag: {
    id: 'AW-11363750698',
    config: {
      page_title: 'Oxi Website',

    }
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
