/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        "klara-pink": "#D0767B",
        "klara-purple": "#4341B5",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      height: {
        128: "40rem",
      },
      width: {
        128: "40rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
