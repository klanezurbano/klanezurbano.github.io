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
        primary: "#1A233D"
      }
    },
  },
  plugins: [],
}