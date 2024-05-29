/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '27rem',
        '12xl' : '13rem',
        "11xl" : '29rem',
      },
      spacing: {
        '512' : '27rem',
      },
    },
  },
  plugins: [],
}