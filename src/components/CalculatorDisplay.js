import React from "react";
import useStore from "../store";

const CalculatorDisplay = () => {
  const { components } = useStore();

  return (
    <div className="bg-info dark:bg-danger-900 p-4 shadow-md rounded-xl text-2xl font-bold text-right min-h-[50px]">
      {components.map((comp) => comp.label).join(" ")}
    </div>
  );
};

export default CalculatorDisplay;
