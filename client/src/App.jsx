import AppShell from "./layouts/AppShell";
import Navbar from "./components/layout/Navbar";
//import Home from "./pages/Home";
//import Editor from "./pages/Editor";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <AppShell>
      <Navbar />
      {/*<Home />*/}
      {/*<Editor />*/}
      <Timeline />
    </AppShell>
  );
}

export default App;
