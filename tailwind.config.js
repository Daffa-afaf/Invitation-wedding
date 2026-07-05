/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15110E',
        maroon: {
          DEFAULT: '#5C1A1A',
          dark: '#3D1010',
          light: '#7A2A2A',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8CD7A',
          dim: '#8F7527',
        },
        cream: '#F3EAD8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Cormorant Garamond"', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at 50% 20%, rgba(201,162,39,0.15), transparent 60%)',
      },
    },
  },
  plugins: [],
}
