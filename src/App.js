import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropZone from "./components/DropZone";
import { useCalculatorStore } from "./store/useCalculatorStore";
import { FaSun, FaMoon } from "react-icons/fa";
import "./index.css";

const App = () => {
  const { darkMode, toggleTheme } = useCalculatorStore();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
        <header className="flex justify-between w-full p-4 shadow-md bg-info-800 text-black">
          <h1 className="text-xl text-center font-bold">React Calculator Builder</h1>
          <button onClick={toggleTheme} className="p-2 bg--700 rounded-full hover:bg-gray-600">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </header>
        <DropZone />
      </div>
    </DndProvider>
  );
};

export default App;

// import React from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import DropZone from "./components/DropZone";
// import { useCalculatorStore } from "./store/useCalculatorStore";
// import { FaSun, FaMoon, FaUndo, FaRedo } from "react-icons/fa";
// import "./index.css";

// const App = () => {
//   const { darkMode, toggleTheme, undo, redo } = useCalculatorStore();

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
//         <header className="flex justify-between w-full p-4 shadow-md bg-gray-800 text-white">
//           <h1 className="text-xl font-bold">React Calculator Builder</h1>
//           <div className="flex gap-2">
//             <button onClick={undo} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
//               <FaUndo size={20} />
//             </button>
//             <button onClick={redo} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
//               <FaRedo size={20} />
//             </button>
//             <button onClick={toggleTheme} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
//               {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//             </button>
//           </div>
//         </header>
//         <DropZone />
//       </div>
//     </DndProvider>
//   );
// };

// export default App;
