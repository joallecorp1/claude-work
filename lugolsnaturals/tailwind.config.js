/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0D9488',
          tealdark: '#134E4A',
          accent: '#F97316',
          cream: '#F0FDFA',
          ink: '#0F172A',
        }
      },
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
