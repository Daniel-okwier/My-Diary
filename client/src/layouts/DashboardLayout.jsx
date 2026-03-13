import Sidebar from "@/layouts/Sidebar"

export default function DashboardLayout({ children }) {

  return (

    <div className="flex min-h-screen">

      <Sidebar/>

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>

  )

}