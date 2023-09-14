/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        textHover: "#d6d8dc",
        text: "#a4a8af",
      },
    },
  },
  plugins: [],
};
