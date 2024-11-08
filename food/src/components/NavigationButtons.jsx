import React from "react";

const NavigationButtons = ({
  onBack,
  onNext,
  onDone,
  isBackDisabled,
  isNextDisabled,
  onGenerateRandomMeal,
}) => {
  return (
    <div className="flex justify-between mt-4">
      {/* Back or Done button */}
      <button
        onClick={isNextDisabled ? onBack : onDone} // Calls onBack if `isNextDisabled` is true, otherwise calls onDone
        disabled={isBackDisabled}
        className={`py-2 px-4 rounded ${
          isBackDisabled ? "text-gray-300" : "text-white"
        }`}
      >
        {isNextDisabled ? "Back" : "Done"}{" "}
        {/* Displays "Back" if `isNextDisabled` is true, otherwise "Done" */}
      </button>

      {/* Add Allergies button */}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`py-2 px-4 rounded ${
          isNextDisabled ? "text-gray-300" : "text-white"
        }`}
      >
        {isNextDisabled ? "Next" : "Add Allergies"}{" "}
        {/* Corrected label for the button */}
      </button>
    </div>
  );
};

export default NavigationButtons;
