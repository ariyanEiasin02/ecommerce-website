/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container' : '1170px'
      },
      fontFamily:{
        'lato' : ["Lato", "sans-serif"],
        'josefin' : ["Josefin Sans", "sans-serif"]
      },
      backgroundColor:{
        'common' : '#7E33E0',
      },
      colors:{
        'primary' : '#0D0E43',
        'secondCommon' : '#FB2E86'
      },
      boxShadow:{
        'shadow' : "0px 8px 0px 0px #2F1AC4",
        'imglastshadow': '-10px 10px #142EB5'
      },
    },
  },
  plugins: [],
}