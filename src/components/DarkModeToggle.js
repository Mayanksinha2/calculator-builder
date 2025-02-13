import React from "react";
import useStore from "../store";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 text-white rounded-lg shadow-md transition
        bg-info-800 hover:bg-info-700"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
