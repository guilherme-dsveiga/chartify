/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-lightest": "#ebd9d3",
        "primary-light": "#eb5e34",
        "primary-regular": "#d64013",
        "neutral-light": "#f0f0f0",
        "neutral-regular": "#999999",
        "neutral-dark": "#0f0f0f",
      },
      backgroundImage: {
        "static-pie-chart":
          "conic-gradient(transparent 115deg, #1db954 0 165deg, transparent 0)",
      },
    },
  },
  plugins: [],
};
