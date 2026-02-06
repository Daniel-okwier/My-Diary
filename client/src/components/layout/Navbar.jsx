import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isAuthenticated = false;

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="font-diary text-2xl tracking-wide">
        MyDiary
      </div>

      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full border border-border px-3 py-1 text-sm transition hover:bg-muted"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {!isAuthenticated ? (
          <button className="rounded-full bg-primary px-5 py-2 text-sm text-white hover:opacity-90 transition">
            Sign up
          </button>
        ) : (
          <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
            👤
          </div>
        )}
      </div>
    </nav>
  );
}
