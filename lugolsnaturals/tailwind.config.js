/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F2A',
          iodine: '#7C2D12',
          amber: '#B45309',
          cream: '#F7F4EE',
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
