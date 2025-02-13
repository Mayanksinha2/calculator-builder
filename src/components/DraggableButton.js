import React from "react";
import { useDrag } from "react-dnd";

const DraggableButton = ({ label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button ref={drag} className={`p-4 bg-primary-500 text-primary rounded-md m-2 ${isDragging ? "opacity-30" : "opacity-70"}`}>
      {label}
    </button>
  );
};

export default DraggableButton;


// import React from "react";
// import { useDrag } from "react-dnd";
// import { useCalculatorStore } from "../store/useCalculatorStore";

// const DraggableButton = ({ label, index }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "button",
//     item: { label, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   const { removeComponent } = useCalculatorStore();

//   return (
//     <button
//       ref={drag}
//       onDoubleClick={() => removeComponent(index)}
//       className={`p-4 bg-blue-500 text-white rounded-md m-2 ${isDragging ? "opacity-50" : "opacity-100"}`}
//     >
//       {label}
//     </button>
//   );
// };

// export default DraggableButton;
