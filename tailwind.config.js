/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-lightest": "#a9e8bf",
        "primary-light": "#22e667",
        "primary-regular": "#1db954",
        "primary-dark": "#138039",
      },
      backgroundImage: {
        "static-pie-chart":
          "conic-gradient(transparent 115deg, #1db954 0 165deg, transparent 0)",
      },
    },
  },
  plugins: [],
};
