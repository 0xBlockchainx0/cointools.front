const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'h1': 'var(--text-h1)',
        'h2': 'var(--text-h2)',
        'h3': 'var(--text-h3)',
        'h4': 'var(--text-h4)',
        'h5': 'var(--text-h5)',
        'h6': 'var(--text-h6)',
        'nav': 'var(--text-nav)',
        'body': 'var(--text-body)',
        'small': 'var(--text-small)',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      primary: {
        DEFAULT: 'var(--color-primary)',
        'light': 'var(--color-primary-light)',
        'dark': 'var(--color-primary-dark)',
      },
      secondary: {
        DEFAULT: 'var(--color-secondary)',
        'light': 'var(--color-secondary-light)',
        'dark': 'var(--color-secondary-dark)',
      },
      bg: {
        DEFAULT: 'var(--color-bg)',
        'back': 'var(--color-bg-back)',
      },
      light: 'var(--color-bg-light)',
      dark: 'var(--color-bg-dark)',
      header: 'var(--color-header)',
      body: 'var(--color-body)',
      shade: 'var(--color-shade)',
      border: 'var(--color-border)',
    },
    fontFamily: {
      'header': ['Quicksand', 'system-ui'],
      'brand': ['Inter', 'system-ui'],
      'body': ['Inter', 'system-ui'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
