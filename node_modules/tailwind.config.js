/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        pink: {
          600: '#ff4d8d',
          700: '#ff2d6f'
        }
      }
    }
  },
  plugins: [],
};
