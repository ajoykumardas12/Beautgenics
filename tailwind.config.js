/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
      colors: {
        "brand": "#C83B53",
        "secondary-text": "#666666",
        "grey-text": "#464646",
        "light-grey-text": "#979797",
        "button-grey": "#F5F5F5",
        "border": "#E0E0E0"
      },
      screens: {
        "xs": "448px",
      }
    },
  },
  plugins: [],
}

