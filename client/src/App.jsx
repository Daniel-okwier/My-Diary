import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppShell from "./layouts/AppShell"
import Navbar from "./components/layout/Navbar"

import Dashboard from "./pages/Dashboard"
import Timeline from "./pages/Timeline"
import CreateEntry from "./pages/CreateEntry"

function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/create" element={<CreateEntry />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App