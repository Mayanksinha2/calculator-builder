import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import useCalculatorStore from "../store/useCalculatorStore";

const Calculator = () => {
  const { components, setComponents } = useCalculatorStore();

  return (
    <div className="flex flex-col items-center justify-center bg-danger p-10 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-black-800 mb-6">Drag Components Here</h2>
      <div className="w-80 bg-gray-100 p-4 rounded-lg shadow-inner">
        <Droppable droppableId="calculator">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-4 gap-3"
            >
              {components.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <button
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-primary-500 text-danger rounded-lg text-lg font-semibold shadow-md hover:bg-primary-600 transition"
                    >
                      {item.label}
                    </button>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Calculator;
