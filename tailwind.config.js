/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        secondary: "#191A23",
        dimWhite: "#F3F3F3",
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
}

