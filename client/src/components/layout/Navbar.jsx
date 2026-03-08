
import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <nav className="border-b border-border">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <Link
          to="/"
          className="text-xl font-bold tracking-tight font-diary"
        >
          MyDiary
        </Link>


        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-sm text-muted hover:text-primary transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-primary text-black font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>

        </div>

      </div>

    </nav>
  )
}
