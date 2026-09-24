/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#050608",
        accent: "#F5F5F5",
        graphite: "#15181D",
        emerald: "#10B981",
      },
    },
  },
  plugins: [],
};
