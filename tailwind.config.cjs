/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitronBlack: "OrbitronBlack",
        orbitronBold: "OrbitronBold",
        orbitronRegular: "orbitronRegular",
      },
      backgroundImage: {
        "cyber-punk":
          "bg-gradient-to-b from-teal-300 via yellow-500 to violet-800",
        hero: "url('../src/assets/space.jpg')",
      },
      borderColor: {
        v1: "#5b21b6",
      },
      maxWidth: {
        "8xl": "1400px",
        "9xl": "1920px",
      },
      fontSize: {
        hero: "90px",
      },
      colors: {
        hero50: "rgba(7,7,7,0)",
        hero100: "rgba(7,7,7,0.57)",
        hero200: "rgba(7,7,7,1)",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
