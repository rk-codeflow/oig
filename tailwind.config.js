/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#003153",
          200: "rgba(100, 149, 237, 0.4)",
          300: "rgba(137, 207, 240, 0.8)",
        },
        yellow: "#faa80a",
        grey: "#F0F1F2",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
