import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "@/services/api"

import {
  User,
  LayoutDashboard,
  PlusSquare,
  Clock,
  Cpu,
  Settings,
  LogOut
} from "lucide-react"

export default function Sidebar() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const res = await api.get("/auth/me")

        setUser(res.data.user)

      } catch {

        localStorage.removeItem("token")
        navigate("/login")

      }

    }

    fetchUser()

  }, [])

  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/login")

  }

  return (

    <aside className="w-64 h-screen border-r border-border flex flex-col justify-between p-6">

      {/* TOP */}

      <div>

        {/* USER PROFILE */}

        <div className="flex items-center gap-3 mb-10">

          <div className="h-10 w-10 rounded-full bg-surface flex items-center justify-center">
            <User size={18}/>
          </div>

          <div>

            <p className="text-sm font-medium">
              {user?.name || "Loading..."}
            </p>

            <p className="text-xs text-muted">
              Personal Journal
            </p>

          </div>

        </div>


        {/* NAV */}

        <nav className="flex flex-col gap-4 text-sm">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <LayoutDashboard size={18}/>
            Dashboard
          </Link>

          <Link
            to="/create"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <PlusSquare size={18}/>
            Create Entry
          </Link>

          <Link
            to="/timeline"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Clock size={18}/>
            Timeline
          </Link>

          <Link
            to="/insights"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Cpu size={18}/>
            AI Insights
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-3 hover:text-primary transition"
          >
            <Settings size={18}/>
            Settings
          </Link>

        </nav>

      </div>


      {/* LOGOUT */}

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-sm text-muted hover:text-red-500 transition"
      >

        <LogOut size={18}/>

        Logout

      </button>

    </aside>

  )

}