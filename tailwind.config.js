/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#020D19',
        secondary: '#F7EDE1',
        tertiary: '#ffc200 ',
        messageBtn: '#020D19',
        impBtn: '#A25D67',
      }
    },
  },
  plugins: [],
}