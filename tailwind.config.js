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
        'card-back': "url('/credit-card-back.png')",
        'card-front': "url('/credit-card-front.png')",
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
        k2d: ['var(--font-k2d)', ...fontFamily.sans]
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        "fade-in-left": "fade-in-left 1.1s cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        "fade-in-right": "fade-in-right 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)"
      },
      keyframes: {
      "fade-in-bottom": {
        "0%": {
          transform: "translateY(50px)",
          opacity: "0"
        },
        to: {
          transform: "translateY(0)",
          opacity: "1"
        }
      },
      "fade-in-left": {
        "0%": {
          transform: "translateX(-50px)",
          opacity: "0"
        },
        to: {
          transform: "translateX(0)",
          opacity: "1"
        }
      },
      "fade-in-right": {
        "0%": {
            transform: "translateX(50px)",
            opacity: "0"
        },
        to: {
            transform: "translateX(0)",
            opacity: "1"
        }
      },
    },
  },
  plugins: [],
}
}
