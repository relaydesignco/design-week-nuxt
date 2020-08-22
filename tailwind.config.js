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
        black: '#222222',
        dark: '#3f3e3f',
        green: {
          default: '#8fc73e',
          dark: '#77ad1a',
        },
        teal: '#4dc1b5',
        blue: {
          default: '#5d9bcc',
          dark: '#427ca8',
        },
        red: '#cb1d1f',
        offwhite: {
          default: '#f8f8f2',
          dark: '#f1f1e6',
        },
      },
      spacing: {
        // '30': '7.5rem',
        '96': '24rem',
        '80': '20rem',
        '128': '32rem',
      },
      fontSize: {
        xxs: '0.5rem',
        '4xl': '2.5rem',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.5em',
      },
      lineHeight: {
        tighter: '1.15',
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
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
