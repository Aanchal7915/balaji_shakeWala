/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#d32f2f',
        orange: {
          600: '#d32f2f',
          700: '#b71c1c', // a darker shade for hover, close to #d32f2f
        },
      },
    },
  },
  plugins: [],
}

