const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand': {
          'blue': '#115D8C',
          'orange': '#F25D27', 
        },
        'color': {
          'title': '#123952',
          'text': '#617480',
          'complement': '#A0ACB2'
        },
        'shapes': {
          '01': '#FFFFFF',
          '02': '#DCE2E5'
        },
        'others': {
          'delete': '#DE3838',
          'green': '#51B853',
          'green_low': '#DCF5DD',
          'blue_low': '#DDE9F0',
          'orange_low': '#FFA585',
          'yellow': '#EFB866'
        },
        'background': '#F5F8FA',
        'page-background': '#F0F0F5'
      },
      fontFamily: {
        saira: ['var(--font-saira)', ...fontFamily.sans],
        'saira-stencil-one': ['var(--font-saira_stencil)', ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}
