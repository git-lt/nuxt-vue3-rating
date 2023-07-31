import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      animation: {
        fadeInRight: 'fadeInRight .4s ease-out forwards',
      },
      keyframes: {
        fadeInRight: {
          to: {
            'opacity': 1,
            'pointer-events': 'unset',
            'transform': 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    theme: ['light', 'dark'],
  },
}
