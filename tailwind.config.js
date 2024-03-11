/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary : "#25b9fa",
        secondary: "#5abdfa",
        primaryDark: "#5b53a2",
        dark: "#342f42"
      },
      container:{
        center :true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
}

