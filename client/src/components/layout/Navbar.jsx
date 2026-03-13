import { useState } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"
import { Sun, Moon, User } from "lucide-react"

import AuthModal from "../auth/AuthModal"

export default function Navbar() {

  const { theme, toggleTheme } = useTheme()

  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const isAuthenticated = false

  return (

    <>
    
      <nav className="border-b border-border">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="font-diary text-2xl tracking-wide"
          >
            MyDiary
          </Link>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">


            {/* THEME BUTTON */}

            <button
              onClick={toggleTheme}
              className="rounded-full border border-border p-2 hover:bg-surface transition"
            >
              {theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>}
            </button>


            {/* AUTH BUTTON */}

            {!isAuthenticated ? (

              <button
                onClick={() => setIsAuthOpen(true)}
                className="rounded-lg bg-primary px-5 py-2 text-sm text-black font-medium hover:opacity-90 transition"
              >
                Sign Up
              </button>

            ) : (

              <div className="h-9 w-9 rounded-full bg-surface flex items-center justify-center">
                <User size={16}/>
              </div>

            )}

          </div>

        </div>

      </nav>


      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

    </>

  )

}