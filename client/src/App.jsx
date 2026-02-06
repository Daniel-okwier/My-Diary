import AppShell from "./layouts/AppShell";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <AppShell>
      <Navbar />
      <Home />
    </AppShell>
  );
}

export default App;
