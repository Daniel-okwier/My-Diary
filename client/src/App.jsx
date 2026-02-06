import AppShell from "./layouts/AppShell";
import Navbar from "./components/layout/Navbar";
//import Home from "./pages/Home";
import Editor from "./pages/Editor";

function App() {
  return (
    <AppShell>
      <Navbar />
      {/*<Home />*/}
      <Editor />
    </AppShell>
  );
}

export default App;
