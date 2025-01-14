/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#141416",
        primaryText: "#fff",
        secondaryText: "#8a8a8a",
        borderColor: "#333333",
        hoverBg: "#fff",
      },
    },
  },
  plugins: [],
};
