/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // make sure your file paths are included
    ],
    darkMode: 'class', // or 'media' if you want to use system preference
    theme: {
      extend: {},
    },
    plugins: [],
  }
  