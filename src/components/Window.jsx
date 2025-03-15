import React, { useState } from "react";
import Draggable from "react-draggable";

const Window = ({ title, onClose, onClick, style }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMinimize = () => setIsMinimized(!isMinimized);
  const toggleMaximize = () => setIsMaximized(!isMaximized);

  return (
    <Draggable handle=".window-header" onStart={onClick}>
      <div
        className={`absolute bg-gray-200 border border-gray-600 shadow-lg ${
          isMaximized ? "w-screen h-screen top-0 left-0" : "w-80"
        } ${isMinimized ? "hidden" : ""}`}
        style={{ ...style, position: "absolute" }}
      >
        {/* Barre de titre */}
        <div className="window-header bg-gray-800 text-white px-2 py-1 flex justify-between items-center cursor-move">
          <span>{title}</span>
          <div>
            <button onClick={toggleMinimize} className="mx-1">➖</button>
            <button onClick={toggleMaximize} className="mx-1">🔲</button>
            <button onClick={onClose} className="mx-1">❌</button>
          </div>
        </div>

        {/* Contenu de la fenêtre */}
        {!isMinimized && (
          <div className="p-4 text-black">
            <p>Bienvenue dans {title} ! 🚀</p>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Window;
