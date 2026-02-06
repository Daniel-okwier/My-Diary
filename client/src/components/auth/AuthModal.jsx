import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("signup"); // signup | login

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-bg p-8 shadow-xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="font-diary text-3xl">
            {mode === "signup" ? "Create your diary" : "Welcome back"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signup"
              ? "Start capturing your memories."
              : "Continue your story."}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-lg border border-border bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-border bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-border bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-primary py-2 text-white hover:opacity-90 transition"
          >
            {mode === "signup" ? "Sign up" : "Log in"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-primary hover:underline"
              >
                Log in
              </button>
            </>
          ) : (
            <>
              New here?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-primary hover:underline"
              >
                Create an account
              </button>
            </>
          )}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
