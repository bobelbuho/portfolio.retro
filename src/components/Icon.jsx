import React from "react";

const Icon = ({ title, onClick }) => {
  return (
    <div className="flex flex-col items-center m-4 cursor-pointer" onClick={onClick}>
      <div className="w-12 h-12 bg-gray-300 border-2 border-gray-600 flex items-center justify-center">
        📁
      </div>
      <span className="text-white text-sm">{title}</span>
    </div>
  );
};

export default Icon;
