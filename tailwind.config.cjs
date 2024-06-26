const withAnimations = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        background: {
          100: '#ffffff',
          200: '#656565',
          300: '#262626',
          400: '#171717',
          500: '#121212',
        },
        primary: {
          400: '#416fe5',
          500: '#2553f5',
        },
        secondary: {
          400: '#f54a3f',
          500: '#f13c3c',
        },
        text: '#ffffff',
        social: {
          discord: {
            normal: '#606bec',
            hover: '#878FF2',
          },
          twitter: {
            normal: '#3fa0db',
            hover: '#74BEEC',
          },
          youtube: {
            normal: '#d03232',
            hover: '#E05858',
          },
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },

  plugins: [],
})
