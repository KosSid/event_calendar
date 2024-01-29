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
        '700px': '700px',
        '400px': '400px',
        '300px': '300px',
      },
      colors: {
        customColorTitle: '#0f172a',
        customColorTitleLight: '#94a3b8',
        customColorBgEvents: '#f8fafd',
        customColorBgModalTop: '#F1F3F4',
      },
      boxShadow: {
        modal: '-1px 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -1px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [tailwindScrollbar],
};
