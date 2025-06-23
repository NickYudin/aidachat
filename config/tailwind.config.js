const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false
  },
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1368px',
      // => @media (min-width: 1368px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        playfair: ['Playfair Display', 'display'],
      },
      colors: {
        oxfordblue: {
          5: '#F3F4F6',
          20: '#9CA7B5',
          40: '#9CA7B5',
          60: '#6B7C8F',
          80: '#39506A',
          100: '#082445',
        },
        indigodye: {
          5: '#F3F5F8',
          10: '#F3F5F8',
          20: '#D0D8E2',
          40: '#A0B1C6',
          60: '#718BA9',
          80: '#41648D',
          100: '#123D70',
        },
        beaver: {
          5: '#FAF9F8',
          20: '#ECE6E4',
          40: '#D9CEC9',
          60: '#C6B5AD',
          80: '#B39D92',
          100: '#A08477',
        },
        mistyrose: {
          20: '#FBF6F5',
          40: '#F6EEEC',
          60: '#F2E5E2',
          80: '#EDDDD9',
          100: '#E9D4CF',
        },
        orange: {
          16: '#FAEEE1',
          100: '#FF8C00'
        },
        lillac: {
          16: '#E2DBF0',
          100: '#5F4BD9',
        },
        red: {
          16: '#F6E0E0',
          100: '#C93E3E',
        },
        green: {
          16: '#D6ECE5',
          80: '#15B68F',
          100: '#127045',
        },
        magenta: {
          16: '#F3D8E5',
          100: '#CB3990',
        },
        blue: {
          16: '#D6DEEB',
          100: '#145EB7',
        },
        transparent: 'transparent',
        white: '#FFFFFF',
        whitetransparent: '#FFFFFFCC',
        blacktransparent: '#00000099',
        additionalgreen: '#15B68F',
        systemfeedback: {
          green: {
            16: '#D6ECE5',
            100: '#127045',
          },
          blue: {
            16: '#D6DEEB',
            100: '#145EB7',
          },
          lillac: {
            16: '#E2DBF0',
            100: '#5F4BD9',
          },
          pink: {
            16: '#F3D8E5',
            100: '#CB3990',
          },
          red: {
            16: '#F6E0E0',
            100: '#C93E3E',
          },
          orange: {
            16: '#FAEEE1',
            100: '#DE9743',
          },
        }
      },
    },
  },
  plugins: [
  ]
}
