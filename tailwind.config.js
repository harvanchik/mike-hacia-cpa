const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#1e90ff",
        50: "#d2e9ff",
        100: "#bcdeff",
        200: "#8fc8ff",
        300: "#62b1ff",
        400: "#359bff",
        500: "#1e90ff",
        600: "#1b82e6",
        700: "#1565b3",
        800: "#0f4880",
        900: "#092b4c",
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray
    },
    extend: {
      fontFamily: {
        serif: ["'Markazi Text'", 'serif'],
        sans: ["'Montserrat'", 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
