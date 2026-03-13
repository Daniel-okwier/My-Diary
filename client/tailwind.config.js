/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {

      colors: {
        bg: "var(--bg-main)",
        surface: "var(--bg-secondary)",

        primary: "var(--primary)",

        text: "var(--text-primary)",
        muted: "var(--text-muted)",

        border: "var(--border)",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        diary: ["Playfair Display", "serif"],
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.15)"
      }

    },
  },

  plugins: [],
}