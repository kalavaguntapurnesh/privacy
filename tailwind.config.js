/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        mainColor: "rgb(22 163 74)",
        headingColor: "#19191B",
        sideHeading: "#474749",
      },
    },
  },
  plugins: [],
};
