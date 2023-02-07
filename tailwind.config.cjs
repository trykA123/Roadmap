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
      },
      borderColor: {
        v1: "#5b21b6",
      },
      maxWidth: {
        "8xl": "1400px",
        "9xl": "1920px",
      },
    },
  },
  plugins: [],
};
