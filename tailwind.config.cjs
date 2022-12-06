/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-50": "#B8D4E3",
        "blue-300": "#252530",
        "blue-500": "#1E1E24",
        "gray-300": "#D9D9D9",
        "gray-700": "#8A8E91",
        "purple-300": "#A551DF",
        "purple-500": "#9649CB",
        "purple-900": "#4F4789",
        "red-500": "#FF9494",
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.png')",
        signUp: "url('./src/assets/hero-sign-up.png')",
      },
      boxShadow: {
        default: "0px 1px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
