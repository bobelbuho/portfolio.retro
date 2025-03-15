import React, { useState } from "react";
import { FaWindows } from "react-icons/fa"; // Utilisation de l'icône Windows

const Taskbar = ({ windows }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-between items-center p-2">
      {/* Bouton Démarrer */}
      <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
        <FaWindows className="text-2xl" />
        <span className="ml-2">Démarrer</span>
      </div>

      {/* Menu Démarrer */}
      {isMenuOpen && (
        <div className="absolute bottom-12 left-2 w-48 bg-gray-700 text-white p-2 shadow-lg">
          <ul>
            <li className="py-1">Programmes</li>
            <li className="py-1">Documents</li>
            <li className="py-1">Paramètres</li>
            <li className="py-1">Arrêter</li>
          </ul>
        </div>
      )}

      {/* Icônes des fenêtres ouvertes */}
      <div className="flex items-center">
        {windows.map((win) => (
          <div key={win.id} className="task-icon mx-2 cursor-pointer">
            {win.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;
