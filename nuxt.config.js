export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Midwest Design Week',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Midwest Design Week',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://midwestdesignweek.com',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    // baseUrl: process.env.BASE_URL || 'http://midwestdesignweekapi.local',
    baseUrl: process.env.BASE_URL || 'https://mwdwaiga.wpengine.com',
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/animate.css'], // stylesheet being loaded by @nuxt/tailwindcss

  webfontloader: {
    // typekit: {
    //   id: 'xxxxxx', // for Adobe Typekit fonts
    // },
    google: {
      families: ['Open Sans:400,600,700', 'Lekton:400,700'],
    },
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/data.server.js'],
  generate: {},
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader', '@nuxtjs/date-fns'],
  dateFns: {
    methods: ['format', 'getDay', 'isAfter'],
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
      },
      transpile: ['gsap'],
    },

    extractCSS: true,
    extend(config, ctx) {
      config.devtool = process.env.NODE_ENV === 'development' ? '#source-map' : '';
    },
  },
};
