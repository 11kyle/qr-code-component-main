/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          hslWhite: 'hsl(0, 0%, 100%)',
          hslLightGrey: 'hsl(212, 45%, 89%)',
          hslGrayishBlue: 'hsl(220, 15%, 55%)',
          hslDarkBlue: 'hsl(218, 44%, 22%)'
        }
      },
    },
    plugins: [],
  }