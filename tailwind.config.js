/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xss: "300px",
      xs: "340px",
      xsm: "500px",
      mxl: "1400px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    // require('daisyui'),
  ],
  variants: {
    variants: {
      extend: {
        display: ["focus-group"],
      },
    },
  },
};
