/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
      },
      borderColor: {
        "gray-300-transparent": "rgba(209, 213, 219, 0.5)", // Add custom color
      },
    },
  },
  plugins: [],
};
