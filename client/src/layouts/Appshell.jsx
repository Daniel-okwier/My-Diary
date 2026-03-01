import Sidebar from "../components/layout/Sidebar"

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      
      <Sidebar />

      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>

    </div>
  )
}