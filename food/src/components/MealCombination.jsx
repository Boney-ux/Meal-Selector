import React, { useState } from "react";

const CombinedMeal = ({
  selectedMeal,
  selectedComponents,
  selectedAllergies,
}) => {
  // State to trigger re-render
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to generate a random meal combination while filtering out allergens
  const generateRandomCombination = () => {
    const combinedItems = [];
    const nutrients = {};
    let totalCalories = 0;

    selectedComponents.forEach((componentType) => {
      const mealComponents = selectedMeal.components.find(
        (comp) => comp.type === componentType
      );
      if (mealComponents) {
        // Filter out items that contain allergens
        const filteredItems = mealComponents.items.filter((item) => {
          // Check if the item contains any allergens
          return !selectedAllergies.some((allergy) =>
            item.name.toLowerCase().includes(allergy.toLowerCase())
          );
        });

        // If there are any items left after filtering, randomly select one
        if (filteredItems.length > 0) {
          const randomItem =
            filteredItems[Math.floor(Math.random() * filteredItems.length)];

          // Add the item to the combined meal
          combinedItems.push(randomItem);

          // Sum up the nutrients and calories
          for (const [key, value] of Object.entries(randomItem.nutrients)) {
            nutrients[key] = (nutrients[key] || 0) + value;
          }
          totalCalories += randomItem.calories;
        }
      }
    });

    return { combinedItems, nutrients, totalCalories };
  };

  const { combinedItems, nutrients, totalCalories } =
    generateRandomCombination();

  // Function to handle the "Refresh" button click
  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Increment the key to trigger re-render
  };

  return (
    <div className="text-white mt-4">
      <h2 className="text-xl font-bold mb-2">Combined Meal</h2>
      <ul className="mb-2">
        {combinedItems.map((item, index) => (
          <li key={index} className="mb-1">
            {item.name} - {item.calories} Calories
          </li>
        ))}
      </ul>
      <div className="mb-2">
        <strong>Total Nutrients:</strong>
        <ul>
          {Object.entries(nutrients).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Total Calories:</strong> {totalCalories}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mb-4"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </div>
  );
};

export default CombinedMeal;
