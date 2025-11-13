/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          black: '#040303',
          gold: '#D4BF91',
          red: '#A4031F',
          gray: '#B2B4B3',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

