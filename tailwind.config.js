/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
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
          DEFAULT: '#8fc73e',
          dark: '#77ad1a',
        },
        teal: '#4dc1b5',
        blue: {
          light: '#81ABD4',
          DEFAULT: '#5B9ACC',
          dark: '#427ca8',
        },
        red: '#cb1d1f',
        offwhite: {
          DEFAULT: '#f8f8f2',
          dark: '#f1f1e6',
        },
      },
      screens: {
        xxl: '1560px',
        // => @media (min-width: 1560px) { ... }
      },
      spacing: {
        80: '20rem',
        96: '24rem',
        128: '32rem',
      },
      inset: {
        '1/2': '50%',
        '1/8': '12.5%',
      },
      gridTemplateColumns: {
        '1fr3': '1fr 1fr 1fr',
      },
      fontSize: {
        xxs: '0.5rem',
        '4xl': '2.5rem',
      },
      minHeight: {
        '16x9': '56.25vw',
      },
      letterSpacing: {
        wide: '0.1em',
        wider: '0.2em',
        widest: '0.5em',
      },
      lineHeight: {
        tighter: '1.15',
      },
      opacity: {
        90: '0.9',
      },
    },
  },
  variants: {},
  plugins: [],
};
