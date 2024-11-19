/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":["Poppins"," sans-serif"],
        "sans":["Open Sans", "sans-serif"],
        "nunito":["Nunito", "sans-serif"]
      },
      colors:{
        "primary": "#5F35F5",
        "secondary": "#000000",
        "info": "#11175D"
      },
      
    },
  },
  plugins: [],
}