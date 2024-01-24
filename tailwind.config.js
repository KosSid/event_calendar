/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      maxHeight: {
        '500px': '500px',
        '2/5': '40%',
        '3/5': '60%',
        '70vh': '70vh',
      },
      minHeight: {
        '500px': '500px',
        '2/5': '40%',
        '3/5': '60%',
      },
      maxWidth: {
        '500px': '500px',
      },
      width: {
        '600px': '600px',
        '400px': '400px',
        '300px': '300px',
      },
      colors: {
        customColorTitle: '#0f172a',
        customColorTitleLight: '#94a3b8',
      },
      boxShadow: {
        right: '8px 0 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [tailwindScrollbar],
};
