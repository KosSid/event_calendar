/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
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
    },
  },
  plugins: [tailwindScrollbar],
};
