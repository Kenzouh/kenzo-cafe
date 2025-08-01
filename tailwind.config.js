/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Include all EJS files in the 'views' folder and subfolders
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cafe_BG': "url('img/cafe.jpg')",
      },
      opacity: {
        '50' : '0.5',
      },
      colors: {
        customBrown: {
          light: "#C8AAAA",
          DEFAULT: "#B09F8C",
          dark: "#3E3B38",
        },
        customBrown2: {
          veryLight: "#9E7D5C",
          light: "#715c47",
          DEFAULT: "#655341",
          brown: "#523f2d",
          dark: "#4D3F31",
          veryDark: "#372D23",
          ultimateDark: "#26211d",
        },
        customGreen: {
          light: "#d4edda",
          DEFAULT: "#28a745",
          dark: "#155724",
        },
        whiteAlpha: {
          DEFAULT: 'rgba(255, 255, 255, .2)',
        },
        nav: {
          'text': "#e6e6ef",
          'here': "#ffffb3",
          'hover': "#302a25", /*2e2822*/
          'active': "#3d362f",
          'hr': "#52463c",
        },

        

      },
      width: {
        'img-200': '200px',
      },
      height: {
        'img-100': '100px',
        'img-150': '150px',
        'img-180': '180px',
        'img-200': '200px',
      },
      borderRadius: {
        'radius-20': '20px',
      },
    },
  },
  plugins: [],
  
}

