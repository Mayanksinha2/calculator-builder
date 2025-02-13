import React from "react";
import { useDrop } from "react-dnd";
import DraggableButton from "../components/DraggableButton";
import { useCalculatorStore } from "../store/useCalculatorStore";

const DropZone = () => {
  const { components, addComponent, expression, setExpression, calculateResult } = useCalculatorStore();

  const [, drop] = useDrop(() => ({
    accept: "button",
    drop: (item) => {setExpression(expression + item.label); addComponent(item.label);}
  }));

  return (
    <div ref={drop} className="w-80 min-h-[200px] bg-danger-200 p-4 mt-6 rounded-md shadow-lg flex flex-col">
      <div className="flex flex-wrap gap-2">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "C", "=", "/"].map((label) => (
          <DraggableButton key={label} label={label} />
        ))}
      </div>
      <div className="w-full bg-success p-2 font-bold text-xl text-center mt-4 border rounded-md shadow">
        {expression || "Enter Expression"}
      </div>
      <button onClick={calculateResult} className="w-full mt-4 bg-danger-500 font-bold text-danger p-2 rounded-md">
        Calculate
      </button>
    </div>
  );
};

export default DropZone;

// import React from "react";
// import { useDrop } from "react-dnd";
// import DraggableButton from "./DraggableButton";
// import { useCalculatorStore } from "../store/useCalculatorStore";

// const DropZone = () => {
//   const { components, addComponent, expression, setExpression, calculateResult } =
//     useCalculatorStore();

//   const [, drop] = useDrop(() => ({
//     accept: "button",
//     drop: (item) => {
//       addComponent(item.label); // Add dynamically
//       setExpression(expression + item.label);
//     },
//   }));

//   return (
//     <div ref={drop} className="w-80 min-h-[200px] bg-gray-200 p-4 mt-6 rounded-md shadow-lg flex flex-col">
//       <div className="flex flex-wrap gap-2">
//         {components.map((label, index) => (
//           <DraggableButton key={index} label={label} index={index} />
//         ))}
//       </div>
//       <div className="w-full bg-white p-2 text-xl text-center mt-4 border rounded-md shadow">
//         {expression || "Enter Expression"}
//       </div>
//       <button onClick={calculateResult} className="w-full mt-4 bg-red-500 text-white p-2 rounded-md">
//         Calculate
//       </button>
//     </div>
//   );
// };

// export default DropZone;
