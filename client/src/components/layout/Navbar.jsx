import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import AuthModal from "../auth/AuthModal";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const isAuthenticated = false;

  return (
    <>
      <nav className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-diary text-2xl tracking-wide">
          MyDiary
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end sm:gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-border px-3 py-1 text-sm hover:bg-muted transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {!isAuthenticated ? (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="rounded-full bg-primary px-5 py-2 text-sm text-white hover:opacity-90 transition"
            >
              Sign up
            </button>
          ) : (
            <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
              👤
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </>
  );
}
