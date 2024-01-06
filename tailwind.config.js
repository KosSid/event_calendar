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
        '2/5': '40%', // 2/5 = 40%
        '3/5': '60%', // 3/5 = 60%
      },
      minHeight: {
        '500px': '500px',
        '2/5': '40%', // 2/5 = 40%
        '3/5': '60%', // 3/5 = 60%
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
