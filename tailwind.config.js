/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "klara-pink": "#C56C73",
        "klara-purple": "#4341B5",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
