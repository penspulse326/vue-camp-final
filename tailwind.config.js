/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A5E63',
        secondary: '#83D6D2',
        warning: '#F0F3BD',
        alert: '#ED6A5A',
      },
    },
  },
  plugins: [],
}
