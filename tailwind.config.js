/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // Correctly point to your HTML file
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'navy': '#1e3a8a',
      }
    },
  },
  plugins: [],
}