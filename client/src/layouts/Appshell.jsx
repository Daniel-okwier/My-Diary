import Sidebar from "@/layouts/Sidebar"

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">

      <Sidebar />

      <div className="flex flex-col flex-1">

        {children}

      </div>

    </div>
  )
}