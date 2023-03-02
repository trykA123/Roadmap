/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitronBlack: "OrbitronBlack",
        orbitronBold: "OrbitronBold",
        orbitronRegular: "orbitronRegular",
        RobotoBlack: "RobotoBlack",
        RobotoLight: "RobotoLight",
      },
      backgroundImage: {
        "cyber-punk":
          "bg-gradient-to-b from-teal-300 via yellow-500 to violet-800",
        hero: "url('../src/assets/background.png')",
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
        "my-blue": "#0D2F7C",
        "my-purple": "#662D91",
        "my-green": "#3CB371",
        "my-red": "#F44336",
        "my-black": "#000000",
        white1: "rgba(255, 255, 255, 0.05)",
        white2: "rgba(255,255,255, 0.4)",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
