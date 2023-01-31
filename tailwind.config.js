/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          default: 'var(--primary)',
          dark: 'var(--primary-dark)',
          transparent: {
            30: 'var(--primary-transparent-30)',
            40: 'var(--primary-transparent-40)',
            50: 'var(--primary-transparent-50)',
            60: 'var(--primary-transparent-60)',
            70: 'var(--primary-transparent-70)',
            80: 'var(--primary-transparent-80)',
          }
        },
        secondary: {
          default: 'var(--secondary)',
        },
        black: {
          default: 'var(--black)',
          transparent: {
            30: 'var(--black-transparent-30)',
            40: 'var(--black-transparent-40)',
            50: 'var(--black-transparent-50)',
            60: 'var(--black-transparent-60)',
            70: 'var(--black-transparent-70)',
            80: 'var(--black-transparent-80)',
          }
        }
      },
      fontFamily: {
        avenir: 'Avenir',
      },
    },
  },
  plugins: [],
}
