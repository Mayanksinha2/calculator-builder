import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Sidebar = ({ items }) => {
  return (
    <Droppable droppableId="sidebar" isDropDisabled={true}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-1/4 bg-gray-900 text-white p-6 shadow-lg flex flex-col gap-2"
        >
          <h2 className="text-2xl font-bold mb-4">Components</h2>
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="p-3 bg-gray-800 rounded-md text-center shadow-md cursor-grab hover:bg-gray-700 transition"
                >
                  {item.label}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Sidebar;
