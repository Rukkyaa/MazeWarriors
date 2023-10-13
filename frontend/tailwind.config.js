/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#EDC4B3',
          100: '#E6B8A2',
          200: '#DEAB90',
          300: '#D69F7E',
          400: '#CD9777',
          500: '#C38E70',
          600: '#B07D62',
          700: '#9D6B53',
          800: '#8A5A44',
          900: '#774936',
        },
      },
    },
  },
  plugins: [],
}

