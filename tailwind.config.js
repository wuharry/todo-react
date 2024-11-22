/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          blue: '#0071FF',
          gray: '#ECECEC',
          green: '#16CB4C',
          red: '#CC4900'
        }
      }
    }
  },
  plugins: [],
}