/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '430px',
        '12xl' : '220px',
        "11xl" : '450px',
      },
      spacing: {
        '512' : '420px',
      },
    },
  },
  plugins: [],
}