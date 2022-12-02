/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-300": "#252530",
        "blue-500": "#1E1E24",
        "purple-300": "#A551DF",
        "purple-500": "#9649CB",
      },
    },
  },
  plugins: [],
};
