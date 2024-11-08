import React from "react";

function MealComponents({ components, selectedComponents, onComponentChange }) {
  return (
    <div className="mt-4 bg-gray-600 px-3 rounded text-white">
      {components.map((component, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={`component-${index}`}
            // Check if the component is in the selectedComponents array
            checked={selectedComponents.includes(component.type)}
            // Call the onComponentChange function with the component type when clicked
            onChange={() => onComponentChange(component.type)}
            className="mr-2"
          />
          <label htmlFor={`component-${index}`} className="text-white">
            {component.type}
          </label>
        </div>
      ))}
    </div>
  );
}
export default MealComponents;
