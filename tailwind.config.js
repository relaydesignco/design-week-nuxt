/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit', // TODO turn this off
  purge: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hind Siliguri', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#212120',
        gray: {
          light: '#C4C4C4',
          DEFAULT: '#949494',
          dark: '#787878',
        },
        teal: {
          light: '#48BEBD',
          DEFAULT: '#389D9C',
          dark: '#2E7F7F',
        },
        orange: {
          light: '#EF6145',
          DEFAULT: '#EC4B2B',
          dark: '#DC3514',
        },
      },
      screens: {
        '2xl': '1560px',
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
        // base is 25px
        xs: '0.6rem', // 15px
        sm: '0.8rem', // 20px
        lg: '1.2rem', // 30px
        xl: '1.4rem', // 35px
        '2xl': '1.6rem', // 40px
        '3xl': '1.8rem', // 45px
        '4xl': '2rem', // 50px
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
