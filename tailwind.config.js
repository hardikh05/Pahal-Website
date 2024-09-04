/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      red: colors.red,
      'yellow1': "#FFB100",
      'yellow2': "#FFEF00",
      'yellow3': "#FECE00",
      'orange': "#FF9200",
      'limegreen': "#CBFF00",
      'default':"#FFFFFF",
},
    extend: {
      fontFamily: {
        "main-head": ['"Koh Santepheap", serif'],
        "small-head": ['"Roboto", sans-serif'],
      },
      borderColor: {
        "brand-gradient": "linear-gradient(to right, #F5E500, #F2A800)",
      },
    },
    backgroundImage: {
      "brand-gradient": "linear-gradient(to right, #F5E500, #F2A800)",
    },
    // colors: {
    //   'yellow1': "#FFB100",
    //   'yellow2': "#FFEF00",
    //   'yellow3': "#FECE00",
    //   'orange': "#FF9200",
    //   'limegreen': "#CBFF00",
    //   'default':"#FFFFFF",
    // },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
      blink: "blink 250ms linear infinite",
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      blink: {
        "0%, 100%": { opacity: "1" },
        "50%": { opacity: "0" },
      },
    },
  },
  

  plugins: [],
};
