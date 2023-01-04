/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      'nunito': ['Nunito','sans-serif']
    }
  },
  plugins: [require("daisyui")],
}
