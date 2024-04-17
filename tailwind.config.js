/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1919px",
      },
      colors: {
        primary: "#C04D33",
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
