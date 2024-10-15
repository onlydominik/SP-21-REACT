/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "black": "hsl(0, 0%, 0%)",
      "gray": "hsl(219, 9%, 45%)",
      "gray-light": "hsl(0, 0%, 90%)",
      "gray-icon": "hsl(220, 14%, 75%)",
      "primary": "hsl(26, 100%, 55%)",
      "primary-light": "hsl(26, 100%, 65%)",
      "red": "red",
      "cos": "rgba(0, 0, 0, 0.7)",
      "transparent": "rgb(0 0 0 / 0%)",
    },
    fontFamily: {
      main: ["Kumbh Sans", "sans-serif"],
    },
  },
  plugins: [],
};
