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
        card: "var(--bg-card)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: "var(--accent)",
        border: "var(--border-soft)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        diary: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}
