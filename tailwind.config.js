/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,css,images}'],
  theme: {
    extend: {
      colors : {
        'gray-bg' : "#d1d5db",
        'gray-dark' : "#8a9097",
        'gray-white' : "#eaeaea",
        'gray-dark-mid' : "#4b5563",
        'violate' : "#4438ca",
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
