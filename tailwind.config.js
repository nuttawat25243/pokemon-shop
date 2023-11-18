/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      rotate: {
        '15': '15deg',
      },
    },
  },
  plugins: [],
};
