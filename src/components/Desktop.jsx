import React, { useState } from "react";
import Icon from "./Icon";
import Window from "./Window";
import Taskbar from "./Taskbar"; // Ajoute Taskbar

const Desktop = () => {
  const [windows, setWindows] = useState([]);
  const [zIndex, setZIndex] = useState(1);

  const openWindow = (title) => {
    setWindows((prev) => {
      const existingWindow = prev.find((win) => win.title === title);
      if (existingWindow) {
        return prev.map((win) =>
          win.title === title ? { ...win, zIndex: zIndex + 1 } : win
        );
      }
      return [...prev, { id: Date.now(), title, zIndex: zIndex + 1 }];
    });
    setZIndex(zIndex + 1);
  };

  const bringToFront = (id) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id ? { ...win, zIndex: zIndex + 1 } : win
      )
    );
    setZIndex(zIndex + 1);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <div className="w-screen h-screen flex flex-wrap p-4 bg-blue-800">
      <Icon title="Mes Projets" onClick={() => openWindow("Mes Projets")} />
      <Icon title="Mon CV" onClick={() => openWindow("Mon CV")} />
      <Icon title="Contact" onClick={() => openWindow("Contact")} />

      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
          onClick={() => bringToFront(win.id)}
          style={{ zIndex: win.zIndex }}
        />
      ))}

      {/* Barre des tâches */}
      <Taskbar windows={windows} />
    </div>
  );
};

export default Desktop;


