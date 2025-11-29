/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 1. Custom Font Families
      fontFamily: {
        heading: ['"Bodoni Moda"', 'serif'],
        body: ['"Newsreader"', 'serif'],
        ui: ['"Space Grotesk"', 'sans-serif'],
        fun: ['"Caveat Brush"', 'cursive'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      // 2. Custom Color Palette
      colors: {
        paper: {
            dark: '#0C3B2E',  // Dark Forest Green
            sage: '#6D9773',  // Light Sage
            clay: '#BB8A52',  // Bronze/Clay
            gold: '#FFBA00',  // Golden Yellow
            cream: '#FDF8E8', // Off-White Background
        }
      }
    },
  },
  plugins: [],
};