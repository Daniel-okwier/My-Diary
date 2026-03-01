import { NavLink } from "react-router-dom"
import { LayoutDashboard, BookOpen, PenSquare, Settings } from "lucide-react"

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition hover:bg-muted"

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border p-6 space-y-6">
      
      <div className="text-xl font-semibold">
        MyDiary
      </div>

      <nav className="flex flex-col space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          <BookOpen size={18} />
          Timeline
        </NavLink>

        <NavLink to="/create" className={linkClass}>
          <PenSquare size={18} />
          New Entry
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <Settings size={18} />
          Settings
        </NavLink>
      </nav>

    </aside>
  )
}