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
    <button ref={drag} className={`p-4 bg-blue-500 text-white rounded-md m-2 ${isDragging ? "opacity-50" : "opacity-100"}`}>
      {label}
    </button>
  );
};

export default DraggableButton;
