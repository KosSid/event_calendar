/** @type {import('tailwindcss').Config} */

import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      maxHeight: {
        '500px': '500px',
      },
    },
  },
  plugins: [forms],
};
