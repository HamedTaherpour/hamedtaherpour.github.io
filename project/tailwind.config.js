const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 05s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
      },
      colors: {
        background: colors.white,
        primary: {
          light: 'rgba(79, 192, 141, 0.2)',
          DEFAULT: '#22d3ee70',
          dark: colors.emerald[500],
        },
        sky: colors.sky,
        cyan: colors.cyan,
        orange: colors.orange,
        rose: colors.rose,
        emerald: colors.emerald,
      },
      fontSize: {
        'xxs': '.6rem',
      },
      divideWidth: {
        '1': '0.5px',
      },
      borderWidth: {
        'xs': '0.5px',
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "700px",
      },
    },
    fontFamily: {
      App: ['Dosis, sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
