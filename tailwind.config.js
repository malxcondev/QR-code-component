/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'outfit': 'font-family: "Outfit", sans-serif;'
      },
      colors: {
        primary: {
          LightGray: 'hsl(212, 45%, 89%)',
          GrayishBlue: 'hsl(220, 15%, 55%)',
          DarkBlue: 'hsl(218, 44%, 22%)',
        }
      }
    },
  },
  plugins: [],
}

