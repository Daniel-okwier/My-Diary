import { BrowserRouter, Routes, Route } from "react-router-dom"

import AppShell from "@/layouts/AppShell"
import Navbar from "@/components/layout/Navbar"

import Home from "@/pages/Home"
import Timeline from "@/pages/Timeline"
import CreateEntry from "@/pages/CreateEntry"
import Dashboard from "@/pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/create" element={<CreateEntry />} />
        </Routes>

      </AppShell>
    </BrowserRouter>
  )
}

export default App