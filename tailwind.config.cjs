/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Segoe UI', 'Segoe UI Bold', 'Segoe UI Light'],
    },
    colors: {
      darkBlue: '#05445E',
      fancyBlue: '#189AB4',
      yellow: '#FFCC29',
    },
    plugins: [],
  },
};
