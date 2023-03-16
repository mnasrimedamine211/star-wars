/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : '#000',
        'dark-gray': '#333333',
        'dark-blue': '#1E3A8A',
        'dark-purple': '#5F259F',
        'white-text' : "#fff",
      },
    },
  },
  plugins: [],
}
