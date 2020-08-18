/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Lekton', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        black: '#3f3e3f',
        green: '#8fc73e',
        teal: '#4dc1b5',
        blue: {
          default: '#5d9bcc',
          dark: '#427ca8',
        },
        red: '#cb1d1f',
        offwhite: '#fbfaf7',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.5em',
      },
    },
  },
  variants: {},
  plugins: [],
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
};
