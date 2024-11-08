import { useState } from "react";
import MealSelect from "./components/MealSelect";
import MealComponents from "./components/MealComponents";
import SearchableAllergies from "./components/SearchableAllergies";
import mealData from "./data/MealData";
import NavigationButtons from "./components/NavigationButtons";
import CombinedMeal from "./components/MealCombination";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(mealData.meals[0]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [combinedItems, setCombinedItems] = useState([]);
  const [step, setStep] = useState(1); // Step state to manage navigation

  // Function to handle meal selection
  function handleSelectMeal(mealName) {
    const meal = mealData.meals.find((m) => m.name === mealName);
    setSelectedMeal(meal);
    setSelectedComponents([]); // Reset selected components when changing the meal
  }

  // Function to handle component selection
  function handleComponentChange(componentType) {
    setSelectedComponents((prevSelected) => {
      if (!prevSelected.includes(componentType)) {
        return [...prevSelected, componentType];
      }
      return prevSelected;
    });
  }

  // Function to handle "Next" and "Back" buttons
  function handleNext() {
    setStep(2); // Move to the allergies page
  }
  const handleAllergyToggle = (allergyName) => {
    setSelectedAllergies((prevSelected) => {
      if (prevSelected.includes(allergyName)) {
        return prevSelected.filter((name) => name !== allergyName);
      } else {
        return [...prevSelected, allergyName];
      }
    });
  };
  function handleBack() {
    setStep(1); // Move back to the meals page
  }
  const generateRandomMeal = () => {
    const combined = [];

    selectedMeal.components.forEach((component) => {
      if (selectedComponents.includes(component.type)) {
        const items = component.items;
        const randomItem = items[Math.floor(Math.random() * items.length)];
        combined.push(randomItem);
      }
    });

    setCombinedItems(combined);
  };
  function handleDone() {
    setStep(3);
  }
  const isBackDisabled = step === 1; // Disable "Back" on the first step
  const isNextDisabled = step === 2; // Disable "Next" on the allergies page
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Nutrition Planner</h1>
      <div className="bg-black p-4 w-full rounded max-w-md">
        {step === 1 && (
          <>
            <MealSelect onSelectMeal={handleSelectMeal} />
            <p className="mt-2 text-white">{selectedMeal.description}</p>
            <MealComponents
              components={selectedMeal.components}
              selectedComponents={selectedComponents}
              onComponentChange={handleComponentChange}
            />
          </>
        )}
        {step === 2 && (
          <>
            <SearchableAllergies
              selectedAllergies={selectedAllergies}
              onAllergyChange={handleAllergyToggle}
            />
          </>
        )}
        {step === 3 && (
          <CombinedMeal
            selectedMeal={selectedMeal}
            selectedComponents={selectedComponents}
            selectedAllergies={selectedAllergies}
            combinedItems={combinedItems}
            onGenerateRandomMeal={generateRandomMeal}
          />
        )}
        <NavigationButtons
          onBack={handleBack}
          onNext={handleNext}
          onDone={handleDone}
          isNextDisabled={isNextDisabled}
        />
      </div>
    </div>
  );
}

export default App;
