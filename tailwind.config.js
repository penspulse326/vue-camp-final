/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#83D6D2',
        secondary: '#1A5E63',
        warning: '#F0F3BD',
        alert: '#ED6A5A'
      }
    }
  },
  plugins: []
};
