const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<MyNuxtPortofolio>/'
  },
} : {}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyNuxtPortfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      // { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" },
      // { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" },
      // { rel: 'stylesheet', href: "https://unpkg.com/aos@2.3.1/dist/aos.css" },
      // { rel: 'stylesheet', href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" },
      // { rel: 'stylesheet', href: 'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'},
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/home.css' 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
