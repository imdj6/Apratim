/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
      'indieFlower': ['Indie Flower'],
      'poppins': ['Poppins'],
      'bebasNeue': ['Bebas Neue'],
      'sourceCodePro': ['Source Code Pro']
    },
    extend: {
      boxShadow: {
        'sponsors': '0px 4px 16px 5px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        // Heading line colors
        'lineRed': '#FF0000',
        'lineGreen': '#00FFA3',
        // box colors
        'boxCyan': '#9AF9E5',
        'boxPink': '#F99AF5',
        'boxBlue': '#64ABFF'
      },
      backgroundImage: {
        'polygon1': "url('/src/assests/Polygon1.png')",
        'Polygon2': "url('/src/assests/Polygon2.png')",
        'Vector':"url('/src/assests/Vector1.png')",
        // Events in home page images
        'technical': "url('/src/assets/technical.png')",
        'cultural': "url('/src/assests/cultural.png')",
        // Sponsors in home page images
        'titleSponsor': "url('/src/assests/titleSponsor.png')",
        // Watermark images in home page
        'TriangleWatermark': "url('/src/assests/triangleWatermark.svg')",
        'CircularWatermark': "url('/src/assests/circularWatermark.svg')",
        'StarWatermark': "url('/src/assests/starWatermark.svg')"
      }
    },
  },
  plugins: [],
}
