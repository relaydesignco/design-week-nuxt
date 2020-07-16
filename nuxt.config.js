import axios from 'axios';
const dynamicRoutes = () => {
  const routes = axios
    .get('http://midwestdesignweekapi.local/wp-json/wp/v2/events?page=1&per_page=100')
    .then((res) => {
      return res.data.map((post) => `/events/${post.slug}`);
    });
  console.log(routes);
  return routes;
};

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
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
        value: 'summary',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Midwest Design Week',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://midwestdesignweek.com',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [], // stylesheet being loaded by @nuxt/tailwindcss

  webfontloader: {
    // typekit: {
    //   id: 'xxxxxx', // for Adobe Typekit fonts
    // },
    google: {
      families: ['Open Sans:400,700'], // Google Font with weights 400 and 700
    },
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/events.server.js',
    '~/plugins/speakers.server.js',
    '~/plugins/sponsors.server.js',
    '~/plugins/dateformat.js',
  ],
  generate: {
    routes: dynamicRoutes,
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {},
  },
};
