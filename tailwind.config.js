/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

    },
    screens: {
      'md' : '768px',
      'lg' : '1024px',
      'tablet' : '1220px',
      'xl' : '1280px',
    }
  },
  plugins: [],
}

