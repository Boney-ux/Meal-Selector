import React, { useState } from "react";
import allergiesData from "../data/AllergiesData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SearchableAllergies = ({ selectedAllergies, onAllergyChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [hoveredAllergy, setHoveredAllergy] = useState(null);

  const filteredAllergies = allergiesData.filter((allergy) =>
    allergy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-4">Search Allergies</h2>
      <input
        type="text"
        placeholder="Search for an allergy..."
        className="w-full p-2 mb-4 rounded text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="list-none mb-4">
        {filteredAllergies.map((allergy, index) => (
          <li
            key={index}
            className="mb-2 p-2 bg-gray-700 rounded flex items-center relative"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={selectedAllergies.includes(allergy.name)}
              onChange={() => onAllergyChange(allergy.name)}
            />
            <span
              className="flex-1 cursor-pointer hover:underline"
              onClick={() => onAllergyChange(allergy.name)}
            >
              {allergy.name}
            </span>

            {/* Information Icon */}
            <div
              className="ml-2 relative"
              onMouseEnter={() => setHoveredAllergy(allergy.name)}
              onMouseLeave={() => setHoveredAllergy(null)}
            >
              <i className="fas fa-light fa-info  cursor-pointer"></i>
              {/* Tooltip for effect and treatment details */}
              {hoveredAllergy === allergy.name && (
                <div className="absolute left-1 bottom-full mb-2 w-64 bg-gray-800 p-2 rounded z-10 opacity-100 transition-opacity duration-300">
                  <p>
                    <strong>Effect:</strong> {allergy.effect}
                  </p>
                  <p>
                    <strong>Treatment:</strong> {allergy.treatment}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableAllergies;
