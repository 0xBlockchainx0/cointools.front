require('dotenv').config()

export default {
  head: {
    title: 'CoinTools',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://apis.google.com/js/platform.js', defer: true }
    ]
  },

  css: [
    '~/assets/css/app.scss',
  ],

  plugins: [
  ],
  devtools: true,
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
  ],

  // auth: {
  //   strategies: {
  //     local: {
  //     },
  //     google: {
  //       clientId: '129126858856-ihk1rglu1mkb0bilmj0so9g04umg5tqv.apps.googleusercontent.com',
  //       clientSecret: 'yBn3qZURVzeS5PiiuAFY-LO6',
  //       codeChallengeMethod: ''
  //     },
  //   }
  // },

  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
  }
}
