import React from "react";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";

function App() {
  return (
    <div className="relative h-screen">
      <Desktop />
      <Taskbar windows={[]} /> {/* Passe ici les fenêtres ouvertes */}
    </div>
  );
}

export default App;
