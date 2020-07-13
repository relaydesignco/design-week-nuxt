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
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
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
