/** @type {import('tailwindcss').Config} */

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
      maxWidth: {
        '500px': '500px',
      },
      width: {
        '500px': '500px',
      },
    },
  },
};
