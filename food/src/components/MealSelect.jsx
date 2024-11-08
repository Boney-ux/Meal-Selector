const MealSelect = ({ onSelectMeal, selected }) => {
  /*useEffect(() => {
    const savedMeal = localStorage.getItem("selectedMeal");
    if (savedMeal) {
      setSelected(savedMeal);
      onSelectMeal(savedMeal); // Call the function to update the content once on mount
    }
  }, []);*/ // Empty dependency array ensures this runs only once

  function handleSelectedMeal(meal) {
    onSelectMeal(meal); // Call to update the content
    localStorage.setItem("selectedMeal", meal); // Save the selected meal
  }

  return (
    <div className="flex justify-between w-full">
      <button
        onClick={() => handleSelectedMeal("Breakfast")}
        disabled={selected === "Breakfast"}
        className={`px-2 py-1 text-sm rounded ${
          selected === "Breakfast"
            ? "bg-gray-800 text-white shadow-md"
            : "text-white"
        }`}
      >
        Breakfast
      </button>
      <button
        onClick={() => handleSelectedMeal("Lunch")}
        disabled={selected === "Lunch"}
        className={`px-2 py-1 text-sm rounded ${
          selected === "Lunch"
            ? "bg-gray-800 text-white shadow-md"
            : "text-white"
        }`}
      >
        Lunch
      </button>
      <button
        onClick={() => handleSelectedMeal("Supper")}
        disabled={selected === "Supper"}
        className={`px-2 py-1 text-sm rounded ${
          selected === "Supper"
            ? "bg-gray-800 text-white shadow-md"
            : "text-white"
        }`}
      >
        Supper
      </button>
    </div>
  );
};

export default MealSelect;
