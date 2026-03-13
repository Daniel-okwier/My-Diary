import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "@/components/layout/Navbar"

import DashboardLayout from "@/layouts/DashboardLayout"

import Home from "@/pages/Home"
import Dashboard from "@/pages/Dashboard"
import Timeline from "@/pages/Timeline"
import EntryRead from "@/pages/EntryRead"
import CreateEntry from "@/pages/CreateEntry"
import AIInsights from "@/pages/AIInsights"
import Settings from "@/pages/Settings"
import OAuthSuccess from "./pages/OAuthSuccess"

function App() {

  return (

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />

        {/* AUTHENTICATED AREA */}

        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard/>
          </DashboardLayout>
        }/>

        <Route path="/timeline" element={
          <DashboardLayout>
            <Timeline/>
          </DashboardLayout>
        }/>

        <Route path="/create" element={
          <DashboardLayout>
            <CreateEntry/>
          </DashboardLayout>
        }/>

        <Route path="/insights" element={
          <DashboardLayout>
            <AIInsights/>
          </DashboardLayout>
        }/>

        <Route path="/settings" element={
          <DashboardLayout>
            <Settings/>
          </DashboardLayout>
        }/>

      </Routes>

    </BrowserRouter>

  )

}

export default App