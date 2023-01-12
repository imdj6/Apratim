/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'polygon1': "url('/src/assests/Polygon1.png')",
        'Polygon2': "url('/src/assests/Polygon2.png')",
        'Vector':"url('/src/assests/Vector1.png')",
      }
    },
  },
  plugins: [],
}
