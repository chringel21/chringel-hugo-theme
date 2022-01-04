const colors = require('tailwindcss/colors')
const { borderColor, fontWeight, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'headline': ['Comfortaa'],
        'body': ['Fira Sans']
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.gray.500'),
              fontWeight: '300',
            },
            a: {
              fontWeight: '300',
              color: theme('colors.accent.500'),
              '&:hover': {
                color: theme('colors.accent.700')
              }
            }
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            h1: { color: theme('colors.gray.200') },
            h2: { color: theme('colors.gray.200') },
            h3: { color: theme('colors.gray.200') },
            h4: { color: theme('colors.gray.200') },
            h5: { color: theme('colors.gray.200') },
            h6: { color: theme('colors.gray.200') },
            a: { color: theme('colors.accent.500') },
            p: { color: theme('colors.gray.200') },
            ul: { color: theme('colors.gray.200') },
            ol: { color: theme('colors.gray.200') },
            strong: { color: theme('colors.gray.200') },
            span: { color: theme('colors.gray.200') }
          }
        }
      }),
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      accent: colors.green
    },
    borderColor: theme => ({
      ...theme('colors')
    }),
    keyframes: theme => ({
      blink: {
        '0%, 100%': { color: 'transparent' },
        '50%': { color: theme('colors.accent.500') }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        }
      }
    }),
    animation: {
      blink: 'blink 1s step-end infinite',
      bounce: 'bounce 1s infinite'
    }
  },
  variants: {
    extend: {
      typography: ['dark'],
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
