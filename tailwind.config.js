/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quran:'Amiri Quran',
      },
      colors: {
        grdark: "#40513B",
        grlight: "#EDF1D6",
      }
    },
  },
  plugins: [],
}
