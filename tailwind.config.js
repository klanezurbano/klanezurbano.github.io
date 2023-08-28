/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryTitle: "Poppins-SemiBold",
        primaryRegular: "Inter-UI",
        secondaryTitle: "Montserrat-Bold",
        secondarySemibold: "Montserrat-Semibold",
        secondaryRegular: "Montserrat-Regular"
      },
      colors: {
        dark: {
          DEFAULT: "#333333",
          100: "#999999",
          200: "#858585",
          300: "#707070",
          400: "#5c5c5c",
          500: "#474747",
          600: "#333333",
          700: "#2e2e2e",
          800: "#292929",
          900: "#242424",
        },
        light: {
          DEFAULT: "#fff7ee",
          100: "#ffffff",
          200: "#fffdfc",
          300: "#fffcf8",
          400: "#fffaf5",
          500: "#fff9f1",
          600: "#fff7ee",
          700: "#e6ded6",
          800: "#ccc6be",
          900: "#b3ada7",
        },
        primary: {
          DEFAULT: "#ce4980",
          100: "#e7a4c0",
          200: "#e292b3",
          300: "#dd80a6",
          400: "#d86d99",
          500: "#d35b8d",
          600: "#ce4980",
          700: "#b94273",
          800: "#a53a66",
          900: "#90335a",
        },
        secondary: {
          DEFAULT: "#b86b77",
          100: "#ead3d6",
          200: "#e3c4c9",
          300: "#dcb5bb",
          400: "#d4a6ad",
          500: "#cd97a0",
          600: "#c68992",
          700: "#bf7a85",
          800: "#b86b77",
          900: "#a6606b",
        },
      }
    },
  },
  plugins: [],
}