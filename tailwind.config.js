/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    
    extend: {
      colors:{
        red:'#DB182C',
        black:'#030304',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
     
      strategy: 'class', // only generate classes
    }),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}