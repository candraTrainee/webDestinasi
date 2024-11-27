/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors:{
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondryColor: '#FFCC00',
        paragrapColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Playball: ['Playball', 'sans-serif'],
    },
    container:{
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem',
      }
    },
  },
  plugins: [],
}