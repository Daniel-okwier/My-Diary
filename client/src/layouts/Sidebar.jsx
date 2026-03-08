import { Link } from "react-router-dom"

export default function Sidebar(){

  return(

    <aside className="w-64 h-screen border-r border-border p-6 hidden md:block">

      <h2 className="font-diary text-xl mb-8">
        MyDiary
      </h2>

      <nav className="flex flex-col gap-4">

        <Link to="/dashboard" className="hover:text-primary">
         <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link to="/create" className="hover:text-primary">
         <PenSquare size={18} />
        
          Create Entry
        </Link>

        <Link to="/timeline" className="hover:text-primary">
        <BookOpen size={18} />
          Timeline
        </Link>

        <Link to="/insights" className="hover:text-primary">
<Cpu size={18} />          AI Insights
        </Link>

         <Link to="/settings" className="hover:text-primary">
         <Settings size={18} />
          Settings
        </Link>

      </nav>

    </aside>

  )

}