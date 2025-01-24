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
      maxWidth:{
        "container": "1440px"
      },
      boxShadow:{
        "box":  "0 4px 4px rgba(0, 0, 0, 0.25)"
      },
    
      keyframes:{
        "zoomIn":{
          '0%': { transform: 'scale(0) ', opacity: '0'},
          '100%': { transform: 'scale(1) ', opacity: '1'}
        },
        "zoomOut":{
          '0%': { transform: 'scale(1) ', opacity: '1'},
          '100%': { transform: 'scale(0) ', opacity: '0'}
        }
      },
      animation:{
        "zoomIn": "zoomIn 0.4s  linear ",
        "zoomOut": "zoomOut 0.4s  linear "
      },

      
    },
  },
  plugins: [],
}