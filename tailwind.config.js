/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(14, 165, 233, 0.45)'
      }
    }
  },
  plugins: []
};
