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
      secondary: {
        DEFAULT: "#d1d1d1",
        50: "#f6f6f6",
        100: "#f1f1f1",
        200: "#e8e8e8",
        300: "#dfdfdf",
        400: "#d6d6d6",
        500: "#d1d1d1",
        600: "#bcbcbc",
        700: "#929292",
        800: "#696969",
        900: "#3f3f3f",
      },
      gray: {
        gray: colors.gray
      }
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
