/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        mainColor:'#1abc9c',
        secondColor:'#2c3e50',
        thirdColor:'#1a252f',
        rgbaMainColor:"rgba(26, 188, 156, 0.6)",
      },
      borderWidth:{
        "1":"1px",
      }
    },
  },
  plugins: [],
}

