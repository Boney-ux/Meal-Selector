const mealData = {
  meals: [
    {
      name: "Breakfast",
      description:
        "Breakfast is the first meal of the day and is crucial for replenishing the body's energy levels after a night's rest. It kickstarts your metabolism and provides essential nutrients to fuel your morning activities.",
      components: [
        {
          type: "Juices & Beverages",
          items: [
            {
              name: "Orange Juice",
              nutrients: { VitaminC: 124 },
              calories: 112,
            },
            { name: "Apple Juice", nutrients: { VitaminC: 10 }, calories: 110 },
            {
              name: "Cranberry Juice",
              nutrients: { VitaminC: 90 },
              calories: 116,
            },
            {
              name: "Pineapple Juice",
              nutrients: { VitaminC: 130 },
              calories: 132,
            },
            {
              name: "Grapefruit Juice",
              nutrients: { VitaminC: 94 },
              calories: 96,
            },
            { name: "Mango Juice", nutrients: { VitaminA: 89 }, calories: 120 },
            {
              name: "Carrot Juice",
              nutrients: { VitaminA: 120 },
              calories: 90,
            },
            {
              name: "Pomegranate Juice",
              nutrients: { Antioxidants: "High" },
              calories: 134,
            },
            { name: "Tomato Juice", nutrients: { VitaminC: 74 }, calories: 41 },
            {
              name: "Beetroot Juice",
              nutrients: { Nitrates: "High" },
              calories: 58,
            },
            {
              name: "Watermelon Juice",
              nutrients: { Hydration: "High" },
              calories: 85,
            },
            {
              name: "Cucumber Water",
              nutrients: { Hydration: "High" },
              calories: 5,
            },
            { name: "Lemonade", nutrients: { VitaminC: 30 }, calories: 99 },
            {
              name: "Coconut Water",
              nutrients: { Potassium: 600 },
              calories: 46,
            },
            {
              name: "Herbal Tea",
              nutrients: { Antioxidants: "High" },
              calories: 2,
            },
            { name: "Green Tea", nutrients: { Caffeine: 25 }, calories: 2 },
            { name: "Black Coffee", nutrients: { Caffeine: 95 }, calories: 2 },
            { name: "Chai Latte", nutrients: { Calcium: 200 }, calories: 120 },
            {
              name: "Matcha Latte",
              nutrients: { Antioxidants: "High" },
              calories: 75,
            },
            {
              name: "Iced Tea",
              nutrients: { Antioxidants: "Moderate" },
              calories: 20,
            },
            {
              name: "Peppermint Tea",
              nutrients: { Menthol: "High" },
              calories: 0,
            },
            {
              name: "Chamomile Tea",
              nutrients: { Relaxants: "High" },
              calories: 0,
            },
            {
              name: "Rooibos Tea",
              nutrients: { Antioxidants: "High" },
              calories: 0,
            },
            {
              name: "Hibiscus Tea",
              nutrients: { Antioxidants: "High" },
              calories: 0,
            },
            { name: "Berry Smoothie", nutrients: { Fiber: 6 }, calories: 140 },
            {
              name: "Banana Smoothie",
              nutrients: { Potassium: 450 },
              calories: 150,
            },
            {
              name: "Mango Smoothie",
              nutrients: { VitaminA: 120 },
              calories: 160,
            },
            {
              name: "Avocado Smoothie",
              nutrients: { HealthyFats: 15 },
              calories: 180,
            },
            {
              name: "Protein Shake",
              nutrients: { Protein: 20 },
              calories: 220,
            },
            { name: "Almond Milk", nutrients: { Calcium: 450 }, calories: 30 },
            { name: "Lemon Water", nutrients: { VitaminC: 30 }, calories: 8 },
            {
              name: "Infused Water",
              nutrients: { Vitamins: "Trace" },
              calories: 5,
            },
            {
              name: "Mint Water",
              nutrients: { Refreshing: "High" },
              calories: 5,
            },
            {
              name: "Ginger Water",
              nutrients: { AntiInflammatory: "High" },
              calories: 8,
            },
            {
              name: "Apple Cider Water",
              nutrients: { AceticAcid: "High" },
              calories: 10,
            },
            { name: "Orange Water", nutrients: { VitaminC: 20 }, calories: 10 },
            {
              name: "Aloe Vera Water",
              nutrients: { Soothing: "High" },
              calories: 5,
            },
            {
              name: "Sparkling Water",
              nutrients: { Minerals: "Trace" },
              calories: 0,
            },
            { name: "Lime Water", nutrients: { VitaminC: 15 }, calories: 8 },
            {
              name: "Berry Water",
              nutrients: { Antioxidants: "Moderate" },
              calories: 15,
            },
            {
              name: "Beetroot Water",
              nutrients: { Nitrates: "High" },
              calories: 10,
            },
            {
              name: "Matcha Water",
              nutrients: { Antioxidants: "High" },
              calories: 5,
            },
            {
              name: "Pomegranate Water",
              nutrients: { Antioxidants: "High" },
              calories: 12,
            },
            {
              name: "Turmeric Water",
              nutrients: { AntiInflammatory: "High" },
              calories: 5,
            },
            {
              name: "Lavender Tea",
              nutrients: { Relaxants: "High" },
              calories: 0,
            },
            {
              name: "Cranberry Water",
              nutrients: { VitaminC: 20 },
              calories: 15,
            },
            {
              name: "Pineapple Water",
              nutrients: { Bromelain: "High" },
              calories: 12,
            },
            { name: "Mango Water", nutrients: { VitaminA: 15 }, calories: 10 },
            {
              name: "Fennel Tea",
              nutrients: { DigestiveAid: "High" },
              calories: 0,
            },
          ],
        },
        {
          type: "Proteins",
          items: [
            {
              name: "Scrambled Eggs",
              nutrients: { Protein: 12, Fat: 10 },
              calories: 150,
            },
            {
              name: "Boiled Eggs",
              nutrients: { Protein: 13, Fat: 11 },
              calories: 155,
            },
            {
              name: "Greek Yogurt",
              nutrients: { Protein: 10, Calcium: 110 },
              calories: 59,
            },
            {
              name: "Cottage Cheese",
              nutrients: { Protein: 11, Calcium: 83 },
              calories: 98,
            },
            {
              name: "Smoked Salmon",
              nutrients: { Protein: 18, Omega3: 2 },
              calories: 140,
            },
            {
              name: "Turkey Bacon",
              nutrients: { Protein: 10, Fat: 6 },
              calories: 60,
            },
            {
              name: "Chicken Sausage",
              nutrients: { Protein: 12, Fat: 9 },
              calories: 120,
            },
            {
              name: "Quinoa",
              nutrients: { Protein: 8, Fiber: 5 },
              calories: 120,
            },
            {
              name: "Chia Seed Pudding",
              nutrients: { Protein: 4, Fiber: 11 },
              calories: 140,
            },
            {
              name: "Tofu Scramble",
              nutrients: { Protein: 10, Iron: 3 },
              calories: 95,
            },
            {
              name: "Peanut Butter",
              nutrients: { Protein: 8, HealthyFats: 16 },
              calories: 190,
            },
            {
              name: "Almond Butter",
              nutrients: { Protein: 7, HealthyFats: 14 },
              calories: 180,
            },
            {
              name: "Hemp Seeds",
              nutrients: { Protein: 10, Omega3: 3 },
              calories: 120,
            },
            {
              name: "Protein Shake",
              nutrients: { Protein: 20, Carbs: 5 },
              calories: 220,
            },
            {
              name: "Lean Ham",
              nutrients: { Protein: 18, Fat: 5 },
              calories: 110,
            },
            {
              name: "Tempeh",
              nutrients: { Protein: 15, Iron: 2 },
              calories: 160,
            },
            {
              name: "Ricotta Cheese",
              nutrients: { Protein: 7, Calcium: 90 },
              calories: 100,
            },
            {
              name: "Black Beans",
              nutrients: { Protein: 8, Fiber: 6 },
              calories: 114,
            },
            {
              name: "Edamame",
              nutrients: { Protein: 11, Fiber: 5 },
              calories: 121,
            },
            {
              name: "Lox (Cured Salmon)",
              nutrients: { Protein: 16, Omega3: 1.5 },
              calories: 90,
            },
            {
              name: "Seitan",
              nutrients: { Protein: 21, Iron: 1.5 },
              calories: 120,
            },
            {
              name: "Whey Protein",
              nutrients: { Protein: 25, BCAAs: 5 },
              calories: 130,
            },
            {
              name: "Canadian Bacon",
              nutrients: { Protein: 12, Fat: 4 },
              calories: 60,
            },
            {
              name: "Hard-Boiled Eggs",
              nutrients: { Protein: 6, Fat: 5 },
              calories: 78,
            },
            {
              name: "Cheddar Cheese",
              nutrients: { Protein: 7, Calcium: 200 },
              calories: 113,
            },
            {
              name: "Pumpkin Seeds",
              nutrients: { Protein: 7, HealthyFats: 14 },
              calories: 125,
            },
            {
              name: "Bacon (Pork)",
              nutrients: { Protein: 12, Fat: 42 },
              calories: 200,
            },
            {
              name: "Sunflower Seeds",
              nutrients: { Protein: 6, HealthyFats: 14 },
              calories: 165,
            },
            {
              name: "Venison Jerky",
              nutrients: { Protein: 15, Fat: 2 },
              calories: 80,
            },
            {
              name: "Fish Cakes",
              nutrients: { Protein: 14, Omega3: 0.5 },
              calories: 150,
            },
          ],
        },
        {
          type: "Vitamins & Minerals",
          items: [
            {
              name: "Spinach",
              nutrients: { Iron: 2.7, VitaminK: 483 },
              calories: 23,
            },
            {
              name: "Kale",
              nutrients: { VitaminA: 9990, VitaminC: 120 },
              calories: 35,
            },
            {
              name: "Broccoli",
              nutrients: { VitaminC: 89.2, Calcium: 47 },
              calories: 55,
            },
            {
              name: "Carrots",
              nutrients: { VitaminA: 16706, Potassium: 320 },
              calories: 41,
            },
            {
              name: "Red Bell Peppers",
              nutrients: { VitaminC: 190, VitaminA: 3131 },
              calories: 31,
            },
            {
              name: "Brussels Sprouts",
              nutrients: { VitaminK: 177, VitaminC: 85 },
              calories: 43,
            },
            {
              name: "Sweet Potatoes",
              nutrients: { VitaminA: 19218, Fiber: 3.3 },
              calories: 86,
            },
            {
              name: "Beetroot",
              nutrients: { Folate: 109, Manganese: 0.3 },
              calories: 43,
            },
            {
              name: "Avocado",
              nutrients: { VitaminE: 2.1, Potassium: 485 },
              calories: 160,
            },
            {
              name: "Mushrooms",
              nutrients: { VitaminD: 18, Selenium: 9.3 },
              calories: 22,
            },
            {
              name: "Almonds",
              nutrients: { VitaminE: 7.3, Magnesium: 76 },
              calories: 579,
            },
            {
              name: "Tomatoes",
              nutrients: { VitaminC: 13.7, VitaminK: 7.9 },
              calories: 18,
            },
            {
              name: "Oranges",
              nutrients: { VitaminC: 53.2, Folate: 30 },
              calories: 47,
            },
            {
              name: "Strawberries",
              nutrients: { VitaminC: 58.8, Manganese: 0.4 },
              calories: 32,
            },
            {
              name: "Blueberries",
              nutrients: { VitaminK: 19.3, VitaminC: 9.7 },
              calories: 57,
            },
            {
              name: "Cauliflower",
              nutrients: { VitaminC: 48.2, VitaminK: 15.5 },
              calories: 25,
            },
            {
              name: "Pumpkin",
              nutrients: { VitaminA: 8513, Potassium: 340 },
              calories: 26,
            },
            {
              name: "Peas",
              nutrients: { VitaminK: 40, VitaminC: 14.2 },
              calories: 81,
            },
            {
              name: "Cabbage",
              nutrients: { VitaminK: 76, VitaminC: 36.6 },
              calories: 25,
            },
            {
              name: "Asparagus",
              nutrients: { Folate: 52, VitaminK: 41.6 },
              calories: 20,
            },
            {
              name: "Swiss Chard",
              nutrients: { VitaminK: 830, Magnesium: 81 },
              calories: 19,
            },
            {
              name: "Bok Choy",
              nutrients: { VitaminA: 4468, VitaminC: 45 },
              calories: 13,
            },
            {
              name: "Watercress",
              nutrients: { VitaminK: 250, Calcium: 120 },
              calories: 11,
            },
            {
              name: "Zucchini",
              nutrients: { VitaminC: 17.9, Manganese: 0.2 },
              calories: 17,
            },
            {
              name: "Turnip Greens",
              nutrients: { VitaminK: 264, Calcium: 190 },
              calories: 32,
            },
            {
              name: "Radishes",
              nutrients: { VitaminC: 14.8, Potassium: 233 },
              calories: 16,
            },
            {
              name: "Collard Greens",
              nutrients: { VitaminK: 230, Calcium: 232 },
              calories: 33,
            },
            {
              name: "Parsley",
              nutrients: { VitaminC: 133, VitaminK: 1640 },
              calories: 36,
            },
            {
              name: "Seaweed",
              nutrients: { Iodine: "High", Calcium: 35 },
              calories: 45,
            },
          ],
        },
        {
          type: "Carbohydrates",
          items: [
            { name: "Oatmeal", nutrients: { Fiber: 4 }, calories: 150 },
            {
              name: "Whole-Grain Toast",
              nutrients: { Fiber: 3.6 },
              calories: 69,
            },
            { name: "Pancakes", nutrients: { Carbs: 28 }, calories: 180 },
            { name: "Bagel", nutrients: { Carbs: 48 }, calories: 290 },
            { name: "Waffles", nutrients: { Carbs: 29 }, calories: 200 },
            { name: "Muffin", nutrients: { Carbs: 30 }, calories: 230 },
            { name: "Granola", nutrients: { Fiber: 5 }, calories: 210 },
            { name: "Croissant", nutrients: { Carbs: 26 }, calories: 231 },
            { name: "Rye Bread", nutrients: { Fiber: 2.5 }, calories: 83 },
            { name: "English Muffin", nutrients: { Carbs: 27 }, calories: 134 },
            {
              name: "Sourdough Bread",
              nutrients: { Carbs: 25 },
              calories: 170,
            },
            { name: "French Toast", nutrients: { Carbs: 33 }, calories: 200 },
            { name: "Sweet Potato", nutrients: { Carbs: 20 }, calories: 86 },
            {
              name: "Breakfast Cereal",
              nutrients: { Carbs: 23 },
              calories: 120,
            },
            { name: "Rice Cakes", nutrients: { Carbs: 7 }, calories: 35 },
            {
              name: "Breakfast Burrito Wrap",
              nutrients: { Carbs: 30 },
              calories: 250,
            },
            { name: "Hash Browns", nutrients: { Carbs: 15 }, calories: 120 },
            {
              name: "Quinoa Porridge",
              nutrients: { Carbs: 20 },
              calories: 130,
            },
            { name: "Baked Beans", nutrients: { Carbs: 30 }, calories: 180 },
            { name: "Banana Bread", nutrients: { Carbs: 40 }, calories: 196 },
            {
              name: "Blueberry Muffin",
              nutrients: { Carbs: 30 },
              calories: 240,
            },
            { name: "Pita Bread", nutrients: { Carbs: 25 }, calories: 150 },
            { name: "Barley", nutrients: { Carbs: 44 }, calories: 193 },
            { name: "Cornbread", nutrients: { Carbs: 32 }, calories: 198 },
            { name: "Brioche", nutrients: { Carbs: 28 }, calories: 160 },
            { name: "Polenta", nutrients: { Carbs: 21 }, calories: 84 },
            { name: "Rice Pudding", nutrients: { Carbs: 22 }, calories: 150 },
            { name: "Cinnamon Roll", nutrients: { Carbs: 45 }, calories: 290 },
            {
              name: "Millet Porridge",
              nutrients: { Carbs: 23 },
              calories: 140,
            },
            { name: "Couscous", nutrients: { Carbs: 36 }, calories: 176 },
          ],
        },
        {
          type: "Healthy Fats",
          items: [
            { name: "Avocado", nutrients: { HealthyFats: 15 }, calories: 160 },
            {
              name: "Almond Butter",
              nutrients: { HealthyFats: 16 },
              calories: 180,
            },
            {
              name: "Peanut Butter",
              nutrients: { HealthyFats: 16 },
              calories: 188,
            },
            { name: "Chia Seeds", nutrients: { Omega3: 17.8 }, calories: 138 },
            { name: "Flaxseed", nutrients: { Omega3: 7 }, calories: 110 },
            {
              name: "Coconut Oil",
              nutrients: { SaturatedFats: 12 },
              calories: 117,
            },
            { name: "Walnuts", nutrients: { Omega3: 2.5 }, calories: 185 },
            { name: "Pecans", nutrients: { HealthyFats: 20 }, calories: 200 },
            {
              name: "Macadamia Nuts",
              nutrients: { HealthyFats: 21 },
              calories: 204,
            },
            {
              name: "Pumpkin Seeds",
              nutrients: { HealthyFats: 5 },
              calories: 151,
            },
            {
              name: "Olive Oil",
              nutrients: { Monounsaturated: 73 },
              calories: 119,
            },
            {
              name: "Sunflower Seeds",
              nutrients: { HealthyFats: 9 },
              calories: 165,
            },
            { name: "Tahini", nutrients: { HealthyFats: 8 }, calories: 180 },
            {
              name: "Hazelnuts",
              nutrients: { HealthyFats: 18 },
              calories: 176,
            },
            { name: "Brazil Nuts", nutrients: { Selenium: 19 }, calories: 187 },
            {
              name: "Sesame Oil",
              nutrients: { HealthyFats: 14 },
              calories: 120,
            },
            { name: "Ghee", nutrients: { HealthyFats: 14 }, calories: 123 },
            { name: "Cashews", nutrients: { HealthyFats: 12 }, calories: 157 },
            {
              name: "Pistachios",
              nutrients: { HealthyFats: 13 },
              calories: 156,
            },
            { name: "Hemp Seeds", nutrients: { Omega3: 10 }, calories: 166 },
            { name: "Almonds", nutrients: { HealthyFats: 14 }, calories: 164 },
            {
              name: "Coconut Milk",
              nutrients: { HealthyFats: 5 },
              calories: 60,
            },
            { name: "Cheese", nutrients: { HealthyFats: 9 }, calories: 110 },
            {
              name: "Greek Yogurt",
              nutrients: { HealthyFats: 4 },
              calories: 100,
            },
            {
              name: "Dark Chocolate",
              nutrients: { HealthyFats: 15 },
              calories: 170,
            },
            {
              name: "Pine Nuts",
              nutrients: { HealthyFats: 19 },
              calories: 191,
            },
            { name: "Walnut Oil", nutrients: { Omega3: 10 }, calories: 120 },
            { name: "Butter", nutrients: { SaturatedFats: 11 }, calories: 102 },
            {
              name: "Cacao Nibs",
              nutrients: { Antioxidants: "High" },
              calories: 125,
            },
            {
              name: "MCT Oil",
              nutrients: { MediumChainFats: 14 },
              calories: 120,
            },
          ],
        },
        {
          type: "Fruits",
          items: [
            {
              name: "Apple",
              nutrients: { VitaminC: 4.6, Fiber: 2.4 },
              calories: 52,
            },
            {
              name: "Banana",
              nutrients: { Potassium: 358, VitaminC: 8.7 },
              calories: 89,
            },
            {
              name: "Blueberries",
              nutrients: { VitaminK: 19.3, VitaminC: 9.7 },
              calories: 57,
            },
            {
              name: "Strawberries",
              nutrients: { VitaminC: 58.8, Manganese: 0.4 },
              calories: 32,
            },
            {
              name: "Orange",
              nutrients: { VitaminC: 53.2, Fiber: 2.4 },
              calories: 47,
            },
            {
              name: "Pineapple",
              nutrients: { VitaminC: 47.8, Bromelain: "High" },
              calories: 50,
            },
            {
              name: "Mango",
              nutrients: { VitaminA: 1082, VitaminC: 36.4 },
              calories: 60,
            },
            {
              name: "Watermelon",
              nutrients: { Hydration: "High", VitaminA: 569 },
              calories: 30,
            },
            {
              name: "Kiwi",
              nutrients: { VitaminC: 92.7, VitaminK: 40.3 },
              calories: 61,
            },
            {
              name: "Grapes",
              nutrients: { VitaminC: 10.8, VitaminK: 14.6 },
              calories: 69,
            },
            {
              name: "Peach",
              nutrients: { VitaminA: 326, VitaminC: 6.6 },
              calories: 39,
            },
            {
              name: "Plum",
              nutrients: { VitaminC: 9.5, VitaminK: 6.4 },
              calories: 46,
            },
            {
              name: "Raspberry",
              nutrients: { Fiber: 6.5, VitaminC: 26.2 },
              calories: 52,
            },
            {
              name: "Blackberry",
              nutrients: { VitaminC: 21, VitaminK: 19.8 },
              calories: 43,
            },
            {
              name: "Papaya",
              nutrients: { VitaminC: 60.9, VitaminA: 950 },
              calories: 43,
            },
            {
              name: "Cherry",
              nutrients: { VitaminC: 7, Potassium: 222 },
              calories: 50,
            },
            {
              name: "Pomegranate",
              nutrients: { VitaminC: 10.2, Fiber: 4 },
              calories: 83,
            },
            {
              name: "Apricot",
              nutrients: { VitaminA: 1926, VitaminC: 10 },
              calories: 48,
            },
            {
              name: "Cantaloupe",
              nutrients: { VitaminA: 3382, VitaminC: 36.7 },
              calories: 34,
            },
            {
              name: "Guava",
              nutrients: { VitaminC: 228, Fiber: 5 },
              calories: 68,
            },
            {
              name: "Lemon",
              nutrients: { VitaminC: 53, Potassium: 138 },
              calories: 29,
            },
            {
              name: "Lime",
              nutrients: { VitaminC: 29.1, Calcium: 22 },
              calories: 30,
            },
            {
              name: "Fig",
              nutrients: { Fiber: 2.9, Potassium: 232 },
              calories: 74,
            },
            {
              name: "Date",
              nutrients: { Fiber: 6.7, Potassium: 696 },
              calories: 282,
            },
            {
              name: "Dragon Fruit",
              nutrients: { VitaminC: 3, Fiber: 3 },
              calories: 60,
            },
            {
              name: "Lychee",
              nutrients: { VitaminC: 71.5, Copper: 0.1 },
              calories: 66,
            },
            {
              name: "Tangerine",
              nutrients: { VitaminC: 26.7, Fiber: 1.8 },
              calories: 53,
            },
            {
              name: "Nectarine",
              nutrients: { VitaminC: 5.4, VitaminA: 332 },
              calories: 44,
            },
            {
              name: "Coconut",
              nutrients: { Manganese: 0.4, Fiber: 3.6 },
              calories: 354,
            },
          ],
        },
        {
          type: "Dairy",
          items: [
            {
              name: "Whole Milk",
              nutrients: { Calcium: 113, VitaminD: 2.4 },
              calories: 61,
            },
            {
              name: "Skim Milk",
              nutrients: { Calcium: 122, VitaminD: 2.6 },
              calories: 35,
            },
            {
              name: "Greek Yogurt",
              nutrients: { Protein: 10, Calcium: 110 },
              calories: 59,
            },
            {
              name: "Cheddar Cheese",
              nutrients: { Calcium: 721, VitaminA: 263 },
              calories: 402,
            },
            {
              name: "Cottage Cheese",
              nutrients: { Protein: 11.1, Calcium: 83 },
              calories: 98,
            },
            {
              name: "Butter",
              nutrients: { HealthyFats: 81, VitaminA: 684 },
              calories: 717,
            },
            {
              name: "Cream Cheese",
              nutrients: { HealthyFats: 34, Calcium: 98 },
              calories: 342,
            },
            {
              name: "Ricotta",
              nutrients: { Protein: 7.5, Calcium: 272 },
              calories: 174,
            },
            {
              name: "Mozzarella",
              nutrients: { Calcium: 505, VitaminB12: 1.7 },
              calories: 280,
            },
            {
              name: "Parmesan",
              nutrients: { Calcium: 1184, Protein: 35.8 },
              calories: 431,
            },
            {
              name: "Yogurt",
              nutrients: { Calcium: 110, VitaminB12: 0.8 },
              calories: 61,
            },
            {
              name: "Goat Cheese",
              nutrients: { Calcium: 298, VitaminA: 407 },
              calories: 364,
            },
            {
              name: "Feta Cheese",
              nutrients: { Calcium: 493, VitaminB6: 0.4 },
              calories: 264,
            },
            {
              name: "Ghee",
              nutrients: { HealthyFats: 99.8, VitaminA: 3000 },
              calories: 900,
            },
            {
              name: "Heavy Cream",
              nutrients: { HealthyFats: 37, Calcium: 66 },
              calories: 340,
            },
            {
              name: "Sour Cream",
              nutrients: { HealthyFats: 20, VitaminA: 124 },
              calories: 198,
            },
            {
              name: "Ice Cream",
              nutrients: { Calcium: 128, VitaminA: 174 },
              calories: 207,
            },
            {
              name: "Whey Protein",
              nutrients: { Protein: 80, Calcium: 200 },
              calories: 400,
            },
            {
              name: "Evaporated Milk",
              nutrients: { Calcium: 280, VitaminB12: 0.5 },
              calories: 134,
            },
            {
              name: "Condensed Milk",
              nutrients: { Sugar: 55, Calcium: 284 },
              calories: 321,
            },
            {
              name: "Milk Powder",
              nutrients: { Protein: 27, Calcium: 912 },
              calories: 496,
            },
            {
              name: "Kefir",
              nutrients: { Probiotics: "High", Calcium: 150 },
              calories: 110,
            },
            {
              name: "Swiss Cheese",
              nutrients: { Calcium: 791, VitaminB12: 3.3 },
              calories: 380,
            },
            {
              name: "Colby Cheese",
              nutrients: { Calcium: 653, VitaminA: 210 },
              calories: 394,
            },
            {
              name: "Blue Cheese",
              nutrients: { Calcium: 528, VitaminA: 208 },
              calories: 353,
            },
            {
              name: "Provolone",
              nutrients: { Calcium: 756, VitaminB12: 1.4 },
              calories: 351,
            },
            {
              name: "Brie Cheese",
              nutrients: { Calcium: 184, VitaminB12: 1.0 },
              calories: 334,
            },
            {
              name: "Camembert",
              nutrients: { Calcium: 300, VitaminA: 350 },
              calories: 299,
            },
            {
              name: "Fromage Blanc",
              nutrients: { Protein: 8, Calcium: 115 },
              calories: 95,
            },
            {
              name: "Clotted Cream",
              nutrients: { HealthyFats: 63, VitaminA: 500 },
              calories: 586,
            },
          ],
        },
        {
          type: "Nuts & Seeds",
          items: [
            {
              name: "Almonds",
              nutrients: { HealthyFats: 49.9, VitaminE: 7.3 },
              calories: 579,
            },
            {
              name: "Walnuts",
              nutrients: { Omega3: 9.1, HealthyFats: 65 },
              calories: 654,
            },
            {
              name: "Cashews",
              nutrients: { HealthyFats: 44, Magnesium: 292 },
              calories: 553,
            },
            {
              name: "Pistachios",
              nutrients: { HealthyFats: 45, VitaminB6: 1.7 },
              calories: 560,
            },
            {
              name: "Peanuts",
              nutrients: { Protein: 25.8, HealthyFats: 49 },
              calories: 567,
            },
            {
              name: "Brazil Nuts",
              nutrients: { HealthyFats: 66.4, Selenium: 1.9 },
              calories: 656,
            },
            {
              name: "Hazelnuts",
              nutrients: { HealthyFats: 61, VitaminE: 15 },
              calories: 628,
            },
            {
              name: "Macadamia Nuts",
              nutrients: { HealthyFats: 75.8, VitaminB1: 1.2 },
              calories: 718,
            },
            {
              name: "Pecans",
              nutrients: { HealthyFats: 72, VitaminB1: 0.7 },
              calories: 691,
            },
            {
              name: "Pine Nuts",
              nutrients: { HealthyFats: 68.4, VitaminK: 9.3 },
              calories: 673,
            },
            {
              name: "Pumpkin Seeds",
              nutrients: { Magnesium: 262, Protein: 19 },
              calories: 559,
            },
            {
              name: "Sunflower Seeds",
              nutrients: { HealthyFats: 51.5, VitaminE: 35.1 },
              calories: 584,
            },
            {
              name: "Chia Seeds",
              nutrients: { Omega3: 17.8, Fiber: 34.4 },
              calories: 486,
            },
            {
              name: "Flaxseeds",
              nutrients: { Omega3: 22.8, Fiber: 27 },
              calories: 534,
            },
            {
              name: "Hemp Seeds",
              nutrients: { Omega3: 3.3, Protein: 31.6 },
              calories: 553,
            },
            {
              name: "Sesame Seeds",
              nutrients: { HealthyFats: 50, Calcium: 975 },
              calories: 573,
            },
            {
              name: "Coconut Flakes",
              nutrients: { HealthyFats: 64.5, Fiber: 9 },
              calories: 660,
            },
            {
              name: "Tahini",
              nutrients: { HealthyFats: 53, Calcium: 426 },
              calories: 595,
            },
            {
              name: "Watermelon Seeds",
              nutrients: { Protein: 28.3, Magnesium: 556 },
              calories: 602,
            },
            {
              name: "Cumin Seeds",
              nutrients: { Iron: 6.3, Antioxidants: "High" },
              calories: 375,
            },
            {
              name: "Fennel Seeds",
              nutrients: { Fiber: 39.8, Calcium: 1200 },
              calories: 345,
            },
            {
              name: "Caraway Seeds",
              nutrients: { Fiber: 38, Calcium: 689 },
              calories: 333,
            },
            {
              name: "Poppy Seeds",
              nutrients: { Calcium: 1438, Iron: 9.8 },
              calories: 525,
            },
            {
              name: "Mustard Seeds",
              nutrients: { Selenium: 208, Magnesium: 169 },
              calories: 508,
            },
            {
              name: "Nigella Seeds",
              nutrients: { Thymoquinone: "High", Iron: 4.6 },
              calories: 345,
            },
            {
              name: "Safflower Seeds",
              nutrients: { HealthyFats: 38, VitaminE: 34.6 },
              calories: 517,
            },
            {
              name: "Cardamom Seeds",
              nutrients: { Fiber: 28, Manganese: 28 },
              calories: 311,
            },
            {
              name: "Black Sesame Seeds",
              nutrients: { Calcium: 975, Magnesium: 351 },
              calories: 573,
            },
            {
              name: "Basil Seeds",
              nutrients: { Fiber: 7.6, Iron: 2.5 },
              calories: 300,
            },
            {
              name: "Apricot Kernels",
              nutrients: { HealthyFats: 50, VitaminB17: 5 },
              calories: 700,
            },
          ],
        },
        {
          type: "Veggies",
          items: [
            {
              name: "Spinach",
              nutrients: { Iron: 2.7, VitaminK: 483 },
              calories: 23,
            },
            {
              name: "Kale",
              nutrients: { VitaminA: 9990, VitaminC: 120 },
              calories: 35,
            },
            {
              name: "Broccoli",
              nutrients: { VitaminC: 89.2, Calcium: 47 },
              calories: 55,
            },
            {
              name: "Carrots",
              nutrients: { VitaminA: 16706, Potassium: 320 },
              calories: 41,
            },
            {
              name: "Sweet Potatoes",
              nutrients: { VitaminA: 19218, Fiber: 3 },
              calories: 86,
            },
            {
              name: "Bell Peppers",
              nutrients: { VitaminC: 152, Fiber: 1.7 },
              calories: 31,
            },
            {
              name: "Zucchini",
              nutrients: { VitaminC: 17.9, Potassium: 261 },
              calories: 17,
            },
            {
              name: "Cauliflower",
              nutrients: { VitaminC: 48.2, Fiber: 2 },
              calories: 25,
            },
            {
              name: "Asparagus",
              nutrients: { VitaminK: 41.6, Folate: 52 },
              calories: 20,
            },
            {
              name: "Brussels Sprouts",
              nutrients: { VitaminC: 85, VitaminK: 177 },
              calories: 43,
            },
            {
              name: "Cabbage",
              nutrients: { VitaminC: 36.6, VitaminK: 76 },
              calories: 25,
            },
            {
              name: "Green Beans",
              nutrients: { VitaminC: 12.2, Fiber: 2.7 },
              calories: 31,
            },
            {
              name: "Onions",
              nutrients: { VitaminC: 7.4, Potassium: 146 },
              calories: 40,
            },
            {
              name: "Leeks",
              nutrients: { VitaminK: 47, Manganese: 0.4 },
              calories: 61,
            },
            {
              name: "Beets",
              nutrients: { Folate: 109, Iron: 1.1 },
              calories: 43,
            },
            {
              name: "Mushrooms",
              nutrients: { VitaminD: 18, Selenium: 12 },
              calories: 22,
            },
            {
              name: "Radishes",
              nutrients: { VitaminC: 14.8, Potassium: 233 },
              calories: 16,
            },
            {
              name: "Artichokes",
              nutrients: { Fiber: 5.4, VitaminC: 11.7 },
              calories: 47,
            },
            {
              name: "Eggplant",
              nutrients: { Fiber: 3, VitaminB6: 0.1 },
              calories: 25,
            },
            {
              name: "Celery",
              nutrients: { VitaminK: 29.6, Fiber: 1.6 },
              calories: 16,
            },
            {
              name: "Cucumber",
              nutrients: { Hydration: "High", VitaminK: 16.4 },
              calories: 16,
            },
            {
              name: "Tomatoes",
              nutrients: { VitaminC: 13.7, Lycopene: "High" },
              calories: 18,
            },
            {
              name: "Pumpkin",
              nutrients: { VitaminA: 8513, Fiber: 0.5 },
              calories: 26,
            },
            {
              name: "Parsnips",
              nutrients: { Fiber: 4.9, Potassium: 375 },
              calories: 75,
            },
            {
              name: "Rutabaga",
              nutrients: { VitaminC: 25, Fiber: 2 },
              calories: 37,
            },
            {
              name: "Fennel",
              nutrients: { VitaminC: 12, Potassium: 414 },
              calories: 31,
            },
            {
              name: "Turnips",
              nutrients: { VitaminC: 21, Fiber: 2.8 },
              calories: 28,
            },
            {
              name: "Swiss Chard",
              nutrients: { VitaminK: 830, VitaminA: 6116 },
              calories: 19,
            },
            {
              name: "Peas",
              nutrients: { Protein: 5.4, VitaminC: 40 },
              calories: 81,
            },
          ],
        },
      ],
    },
    {
      name: "Lunch",
      description:
        "Lunch is a mid-day meal that replenishes energy and helps sustain your body through the afternoon. It provides essential nutrients to maintain focus and physical stamina for the remainder of the day.",
      components: [
        {
          type: "Proteins",
          items: [
            {
              name: "Grilled Chicken Breast",
              nutrients: { Protein: 31 },
              calories: 165,
            },
            {
              name: "Baked Salmon",
              nutrients: { Protein: 25, Omega3: 2.6 },
              calories: 208,
            },
            {
              name: "Lean Beef Steak",
              nutrients: { Protein: 31, Iron: 2.6 },
              calories: 271,
            },
            {
              name: "Tofu",
              nutrients: { Protein: 8, Calcium: 350 },
              calories: 76,
            },
            {
              name: "Hard-Boiled Eggs",
              nutrients: { Protein: 12.6, VitaminD: 2 },
              calories: 155,
            },
            {
              name: "Blackened Tilapia",
              nutrients: { Protein: 26, Potassium: 508 },
              calories: 128,
            },
            {
              name: "Shrimp Skewers",
              nutrients: { Protein: 24, Selenium: 48 },
              calories: 99,
            },
            {
              name: "Turkey Breast",
              nutrients: { Protein: 29, VitaminB6: 0.9 },
              calories: 135,
            },
            {
              name: "Roast Pork Loin",
              nutrients: { Protein: 24, VitaminB1: 0.9 },
              calories: 242,
            },
            {
              name: "Grilled Lamb Chops",
              nutrients: { Protein: 25, Iron: 1.6 },
              calories: 282,
            },
            {
              name: "Smoked Trout",
              nutrients: { Protein: 18, Omega3: 1.5 },
              calories: 127,
            },
            {
              name: "Beef Meatballs",
              nutrients: { Protein: 15, Iron: 2 },
              calories: 200,
            },
            {
              name: "Tempeh",
              nutrients: { Protein: 19, Magnesium: 81 },
              calories: 192,
            },
            {
              name: "Roasted Duck Breast",
              nutrients: { Protein: 24, Iron: 2.5 },
              calories: 337,
            },
            {
              name: "Pulled Pork",
              nutrients: { Protein: 29, Zinc: 2 },
              calories: 350,
            },
            {
              name: "Crab Cakes",
              nutrients: { Protein: 14, Selenium: 36 },
              calories: 160,
            },
            {
              name: "Grilled Tuna",
              nutrients: { Protein: 29.9, Omega3: 0.5 },
              calories: 130,
            },
            {
              name: "Chicken Tenders",
              nutrients: { Protein: 23, VitaminB12: 0.5 },
              calories: 195,
            },
            {
              name: "Roasted Chickpeas",
              nutrients: { Protein: 9, Fiber: 8 },
              calories: 164,
            },
            {
              name: "Stuffed Bell Peppers",
              nutrients: { Protein: 8, VitaminC: 50 },
              calories: 120,
            },
            {
              name: "Seared Scallops",
              nutrients: { Protein: 14, VitaminB12: 0.8 },
              calories: 137,
            },
            {
              name: "Pan-Seared Cod",
              nutrients: { Protein: 23, Selenium: 47 },
              calories: 105,
            },
            {
              name: "BBQ Ribs",
              nutrients: { Protein: 20, Iron: 2.3 },
              calories: 290,
            },
            {
              name: "Venison Steak",
              nutrients: { Protein: 30, Iron: 4 },
              calories: 158,
            },
            {
              name: "Quinoa & Black Bean Patty",
              nutrients: { Protein: 11, Fiber: 7 },
              calories: 200,
            },
            {
              name: "Mushroom Stroganoff",
              nutrients: { Protein: 8, VitaminD: 2.5 },
              calories: 220,
            },
            {
              name: "Seitan",
              nutrients: { Protein: 21, Iron: 1.5 },
              calories: 200,
            },
            {
              name: "Roast Ham",
              nutrients: { Protein: 24, VitaminB6: 0.7 },
              calories: 145,
            },
            {
              name: "Herring Fillet",
              nutrients: { Protein: 18, Omega3: 1.8 },
              calories: 158,
            },
            {
              name: "Fried Tofu Cubes",
              nutrients: { Protein: 9, Calcium: 250 },
              calories: 140,
            },
          ],
        },
        {
          type: "Carbohydrates",
          items: [
            {
              name: "Brown Rice",
              nutrients: { Fiber: 3.5, Magnesium: 143 },
              calories: 370,
            },
            {
              name: "Whole Wheat Pasta",
              nutrients: { Fiber: 6, Iron: 2 },
              calories: 174,
            },
            {
              name: "Quinoa",
              nutrients: { Fiber: 2.8, Magnesium: 197 },
              calories: 368,
            },
            {
              name: "Sweet Potato",
              nutrients: { VitaminA: 19218, Fiber: 3.3 },
              calories: 86,
            },
            {
              name: "Farro",
              nutrients: { Fiber: 8, Protein: 7 },
              calories: 340,
            },
            {
              name: "Bulgur",
              nutrients: { Fiber: 4.5, Iron: 2.5 },
              calories: 342,
            },
            {
              name: "Couscous",
              nutrients: { Fiber: 2.2, Selenium: 27 },
              calories: 112,
            },
            {
              name: "Barley",
              nutrients: { Fiber: 17, Magnesium: 79 },
              calories: 354,
            },
            {
              name: "Cornbread",
              nutrients: { Fiber: 2, VitaminB6: 0.2 },
              calories: 198,
            },
            {
              name: "Roasted Potatoes",
              nutrients: { Potassium: 620, Fiber: 2 },
              calories: 150,
            },
            {
              name: "White Rice",
              nutrients: { Fiber: 0.6, VitaminB1: 0.1 },
              calories: 130,
            },
            {
              name: "Mashed Potatoes",
              nutrients: { Potassium: 450, VitaminC: 13 },
              calories: 105,
            },
            {
              name: "Pita Bread",
              nutrients: { Fiber: 2.2, Protein: 6 },
              calories: 165,
            },
            {
              name: "Whole Grain Bread",
              nutrients: { Fiber: 4, Magnesium: 36 },
              calories: 240,
            },
            {
              name: "Soba Noodles",
              nutrients: { Protein: 8, Iron: 1.2 },
              calories: 100,
            },
            {
              name: "Lentil Pasta",
              nutrients: { Protein: 12, Iron: 3 },
              calories: 190,
            },
            {
              name: "Tortilla Wraps",
              nutrients: { Fiber: 2.5, Calcium: 45 },
              calories: 120,
            },
            {
              name: "Baked Plantains",
              nutrients: { Potassium: 499, Fiber: 3.6 },
              calories: 122,
            },
            {
              name: "Whole Wheat Bagel",
              nutrients: { Fiber: 4.5, Iron: 1.4 },
              calories: 245,
            },
            {
              name: "Rye Bread",
              nutrients: { Fiber: 5, VitaminB6: 0.3 },
              calories: 259,
            },
            {
              name: "Oatmeal",
              nutrients: { Fiber: 4, Magnesium: 68 },
              calories: 150,
            },
            {
              name: "Millet",
              nutrients: { Fiber: 1.3, Iron: 1.1 },
              calories: 119,
            },
            {
              name: "Polenta",
              nutrients: { Fiber: 1.8, VitaminA: 78 },
              calories: 70,
            },
            {
              name: "Whole Wheat Crackers",
              nutrients: { Fiber: 3, Calcium: 20 },
              calories: 130,
            },
            {
              name: "Fusilli Pasta",
              nutrients: { Fiber: 2, Protein: 7 },
              calories: 160,
            },
            {
              name: "Basmati Rice",
              nutrients: { Fiber: 0.7, Selenium: 9 },
              calories: 140,
            },
            {
              name: "Roasted Chickpeas",
              nutrients: { Fiber: 8, Protein: 15 },
              calories: 164,
            },
            {
              name: "Sweet Corn",
              nutrients: { Fiber: 2.7, VitaminC: 6.8 },
              calories: 96,
            },
            {
              name: "Risotto",
              nutrients: { Fiber: 1.5, VitaminB6: 0.2 },
              calories: 130,
            },
          ],
        },
        {
          type: "Vegetables & Greens",
          items: [
            {
              name: "Romaine Lettuce",
              nutrients: { VitaminK: 48, VitaminA: 8710 },
              calories: 15,
            },
            {
              name: "Cherry Tomatoes",
              nutrients: { VitaminC: 20, Potassium: 292 },
              calories: 18,
            },
            {
              name: "Green Beans",
              nutrients: { VitaminC: 12.2, Fiber: 2.7 },
              calories: 31,
            },
            {
              name: "Arugula",
              nutrients: { VitaminK: 108, Calcium: 160 },
              calories: 25,
            },
            {
              name: "Bell Peppers",
              nutrients: { VitaminC: 152, Fiber: 1.7 },
              calories: 31,
            },
            {
              name: "Sugar Snap Peas",
              nutrients: { VitaminC: 60, Fiber: 3 },
              calories: 42,
            },
            {
              name: "Brussels Sprouts",
              nutrients: { VitaminC: 85, VitaminK: 177 },
              calories: 43,
            },
            {
              name: "Spinach",
              nutrients: { VitaminA: 9377, VitaminK: 483 },
              calories: 23,
            },
            {
              name: "Kale",
              nutrients: { VitaminA: 9990, VitaminK: 390 },
              calories: 35,
            },
            {
              name: "Red Cabbage",
              nutrients: { VitaminC: 57, Fiber: 2 },
              calories: 31,
            },
            {
              name: "Broccoli",
              nutrients: { VitaminC: 89.2, Fiber: 2.6 },
              calories: 55,
            },
            {
              name: "Carrots",
              nutrients: { VitaminA: 16706, Fiber: 2.8 },
              calories: 41,
            },
            {
              name: "Swiss Chard",
              nutrients: { VitaminK: 830, VitaminA: 6116 },
              calories: 19,
            },
            {
              name: "Radicchio",
              nutrients: { VitaminK: 255, Fiber: 1.6 },
              calories: 23,
            },
            {
              name: "Watercress",
              nutrients: { VitaminK: 120, VitaminA: 3191 },
              calories: 11,
            },
            {
              name: "Bok Choy",
              nutrients: { VitaminA: 4468, Calcium: 105 },
              calories: 13,
            },
            {
              name: "Collard Greens",
              nutrients: { VitaminK: 769, VitaminA: 7228 },
              calories: 33,
            },
            {
              name: "Fennel",
              nutrients: { VitaminC: 12, Potassium: 414 },
              calories: 31,
            },
            {
              name: "Turnip Greens",
              nutrients: { VitaminK: 138, VitaminA: 6373 },
              calories: 32,
            },
            {
              name: "Green Onions",
              nutrients: { VitaminC: 8, Fiber: 1 },
              calories: 32,
            },
            {
              name: "Endive",
              nutrients: { VitaminA: 216, Folate: 108 },
              calories: 17,
            },
            {
              name: "Cucumber",
              nutrients: { Hydration: "High", VitaminK: 16.4 },
              calories: 16,
            },
            {
              name: "Okra",
              nutrients: { VitaminC: 23, Fiber: 3 },
              calories: 33,
            },
            {
              name: "Radishes",
              nutrients: { VitaminC: 14.8, Potassium: 233 },
              calories: 16,
            },
            {
              name: "Eggplant",
              nutrients: { Fiber: 3, VitaminB6: 0.1 },
              calories: 25,
            },
            {
              name: "Zucchini",
              nutrients: { VitaminC: 17.9, Potassium: 261 },
              calories: 17,
            },
            {
              name: "Mushrooms",
              nutrients: { VitaminD: 18, Selenium: 12 },
              calories: 22,
            },
            {
              name: "Leeks",
              nutrients: { VitaminK: 47, Manganese: 0.4 },
              calories: 61,
            },
            {
              name: "Asparagus",
              nutrients: { VitaminK: 41.6, Folate: 52 },
              calories: 20,
            },
          ],
        },
        {
          type: "Healthy Fats",
          items: [
            {
              name: "Avocado",
              nutrients: { HealthyFats: 15, VitaminE: 2.1 },
              calories: 160,
            },
            {
              name: "Olive Oil",
              nutrients: { MonounsaturatedFats: 73, VitaminE: 14.4 },
              calories: 884,
            },
            {
              name: "Almond Butter",
              nutrients: { HealthyFats: 49, VitaminE: 26.2 },
              calories: 614,
            },
            {
              name: "Chia Seeds",
              nutrients: { Omega3: 17.8, Fiber: 34.4 },
              calories: 486,
            },
            {
              name: "Flaxseed Oil",
              nutrients: { Omega3: 50, Lignans: "High" },
              calories: 884,
            },
            {
              name: "Peanut Butter",
              nutrients: { HealthyFats: 50, Protein: 25 },
              calories: 588,
            },
            {
              name: "Coconut Oil",
              nutrients: { SaturatedFats: 82, MCTs: "High" },
              calories: 862,
            },
            {
              name: "Walnuts",
              nutrients: { Omega3: 9.1, Antioxidants: "High" },
              calories: 654,
            },
            {
              name: "Pistachios",
              nutrients: { HealthyFats: 45, VitaminB6: 1.7 },
              calories: 560,
            },
            {
              name: "Sesame Oil",
              nutrients: { HealthyFats: 40, VitaminK: 13.6 },
              calories: 884,
            },
            {
              name: "Brazil Nuts",
              nutrients: { Selenium: 1917, HealthyFats: 66 },
              calories: 656,
            },
            {
              name: "Sunflower Seeds",
              nutrients: { VitaminE: 35.2, HealthyFats: 51 },
              calories: 584,
            },
            {
              name: "Cashews",
              nutrients: { HealthyFats: 44, Magnesium: 292 },
              calories: 553,
            },
            {
              name: "Macadamia Nuts",
              nutrients: { MonounsaturatedFats: 80, HealthyFats: 76 },
              calories: 718,
            },
            {
              name: "Hazelnuts",
              nutrients: { HealthyFats: 61, VitaminE: 15 },
              calories: 628,
            },
            {
              name: "Pumpkin Seeds",
              nutrients: { HealthyFats: 45, Iron: 3.3 },
              calories: 559,
            },
            {
              name: "Tahini",
              nutrients: { HealthyFats: 53, Calcium: 426 },
              calories: 595,
            },
            {
              name: "Coconut Milk",
              nutrients: { HealthyFats: 24, Manganese: 0.9 },
              calories: 230,
            },
            {
              name: "Ghee",
              nutrients: { HealthyFats: 62, VitaminA: 900 },
              calories: 900,
            },
            {
              name: "Almonds",
              nutrients: { HealthyFats: 49.9, Magnesium: 268 },
              calories: 579,
            },
            {
              name: "Pecans",
              nutrients: { HealthyFats: 72, VitaminE: 1.4 },
              calories: 691,
            },
            {
              name: "Pine Nuts",
              nutrients: { HealthyFats: 68, VitaminK: 15 },
              calories: 673,
            },
            {
              name: "Sardines in Olive Oil",
              nutrients: { Omega3: 1.4, VitaminD: 4.8 },
              calories: 208,
            },
            {
              name: "Duck Fat",
              nutrients: { HealthyFats: 100, Omega3: "Moderate" },
              calories: 900,
            },
            {
              name: "Hemp Seeds",
              nutrients: { Omega3: 3.3, Protein: 31.5 },
              calories: 553,
            },
            {
              name: "Black Olives",
              nutrients: { HealthyFats: 11, Iron: 3.3 },
              calories: 115,
            },
            {
              name: "Bacon Fat",
              nutrients: { SaturatedFats: 39, MonounsaturatedFats: 45 },
              calories: 900,
            },
            {
              name: "MCT Oil",
              nutrients: { MCTs: 100, HealthyFats: 100 },
              calories: 860,
            },
            {
              name: "Anchovy Fillets",
              nutrients: { Omega3: 1.5, Protein: 17 },
              calories: 210,
            },
            {
              name: "Mayonnaise",
              nutrients: { HealthyFats: 75, VitaminE: 3.3 },
              calories: 680,
            },
          ],
        },
        {
          type: "Hydration",
          items: [
            {
              name: "Cucumber Water",
              nutrients: { Hydration: "High", VitaminK: 16.4 },
              calories: 5,
            },
            {
              name: "Infused Lemon Water",
              nutrients: { VitaminC: 30 },
              calories: 8,
            },
            {
              name: "Herbal Iced Tea",
              nutrients: { Antioxidants: "Moderate" },
              calories: 20,
            },
            {
              name: "Aloe Vera Juice",
              nutrients: { Soothing: "High" },
              calories: 15,
            },
            {
              name: "Berry Infused Water",
              nutrients: { Antioxidants: "High" },
              calories: 15,
            },
            {
              name: "Electrolyte Water",
              nutrients: { Electrolytes: "Balanced" },
              calories: 0,
            },
            {
              name: "Coconut Water",
              nutrients: { Potassium: 600 },
              calories: 46,
            },
            {
              name: "Mint Water",
              nutrients: { Refreshing: "High" },
              calories: 5,
            },
            {
              name: "Ginger Lemon Water",
              nutrients: { AntiInflammatory: "High" },
              calories: 8,
            },
            {
              name: "Sparkling Mineral Water",
              nutrients: { Minerals: "Trace" },
              calories: 0,
            },
            {
              name: "Pineapple Water",
              nutrients: { Bromelain: "High" },
              calories: 12,
            },
            {
              name: "Cranberry Water",
              nutrients: { VitaminC: 20 },
              calories: 15,
            },
            {
              name: "Apple Cinnamon Water",
              nutrients: { Antioxidants: "Moderate" },
              calories: 10,
            },
            {
              name: "Raspberry Lime Water",
              nutrients: { VitaminC: 10 },
              calories: 12,
            },
            { name: "Orange Water", nutrients: { VitaminC: 20 }, calories: 10 },
            {
              name: "Chamomile Iced Tea",
              nutrients: { Relaxants: "High" },
              calories: 0,
            },
            {
              name: "Lavender Lemonade",
              nutrients: { Relaxants: "High" },
              calories: 12,
            },
            { name: "Green Tea", nutrients: { Caffeine: 25 }, calories: 2 },
            {
              name: "Peppermint Tea",
              nutrients: { Menthol: "High" },
              calories: 0,
            },
            {
              name: "Matcha Water",
              nutrients: { Antioxidants: "High" },
              calories: 5,
            },
            {
              name: "Honey Lemon Water",
              nutrients: { VitaminC: 10 },
              calories: 15,
            },
            {
              name: "Cucumber Mint Cooler",
              nutrients: { Refreshing: "High" },
              calories: 5,
            },
            {
              name: "Hibiscus Tea",
              nutrients: { Antioxidants: "High" },
              calories: 0,
            },
            {
              name: "Turmeric Water",
              nutrients: { AntiInflammatory: "High" },
              calories: 5,
            },
            {
              name: "Beetroot Water",
              nutrients: { Nitrates: "High" },
              calories: 10,
            },
            {
              name: "Pomegranate Water",
              nutrients: { Antioxidants: "High" },
              calories: 12,
            },
            {
              name: "Blackberry Mint Water",
              nutrients: { Antioxidants: "Moderate" },
              calories: 10,
            },
            {
              name: "Rooibos Tea",
              nutrients: { Antioxidants: "High" },
              calories: 0,
            },
            {
              name: "Herbal Detox Water",
              nutrients: { Cleansing: "High" },
              calories: 5,
            },
            {
              name: "Coconut Lime Cooler",
              nutrients: { Potassium: 300 },
              calories: 20,
            },
          ],
        },
        {
          type: "Grains",
          items: [
            {
              name: "Whole Grain Bread",
              nutrients: { Fiber: 4, Iron: 2 },
              calories: 240,
            },
            {
              name: "Brown Rice",
              nutrients: { Fiber: 3.5, Magnesium: 143 },
              calories: 370,
            },
            {
              name: "Quinoa",
              nutrients: { Protein: 14.1, Fiber: 2.8 },
              calories: 368,
            },
            {
              name: "Oatmeal",
              nutrients: { Fiber: 4, Magnesium: 68 },
              calories: 150,
            },
            { name: "Farro", nutrients: { Fiber: 8, Iron: 2 }, calories: 340 },
            {
              name: "Barley",
              nutrients: { Fiber: 17, Magnesium: 79 },
              calories: 354,
            },
            {
              name: "Bulgur",
              nutrients: { Fiber: 4.5, VitaminB6: 0.2 },
              calories: 342,
            },
            {
              name: "Couscous",
              nutrients: { Fiber: 2.2, Selenium: 27 },
              calories: 112,
            },
            {
              name: "Millet",
              nutrients: { Fiber: 1.3, Magnesium: 114 },
              calories: 378,
            },
            {
              name: "Buckwheat",
              nutrients: { Fiber: 5, Magnesium: 231 },
              calories: 343,
            },
            {
              name: "Wild Rice",
              nutrients: { Fiber: 3, Protein: 4 },
              calories: 101,
            },
            {
              name: "Spelt",
              nutrients: { Fiber: 5.5, Iron: 4 },
              calories: 338,
            },
            {
              name: "Rye Bread",
              nutrients: { Fiber: 6, Magnesium: 73 },
              calories: 259,
            },
            {
              name: "White Rice",
              nutrients: { Carbohydrates: 35, Iron: 1 },
              calories: 130,
            },
            {
              name: "Cornmeal",
              nutrients: { Fiber: 3, Iron: 2.4 },
              calories: 384,
            },
            {
              name: "Polenta",
              nutrients: { Fiber: 1, Calcium: 8 },
              calories: 70,
            },
            {
              name: "Amaranth",
              nutrients: { Protein: 9, Fiber: 4 },
              calories: 251,
            },
            {
              name: "Freekeh",
              nutrients: { Fiber: 4, Magnesium: 32 },
              calories: 140,
            },
            {
              name: "Teff",
              nutrients: { Calcium: 180, Iron: 7.6 },
              calories: 367,
            },
            {
              name: "Sorghum",
              nutrients: { Protein: 10, Magnesium: 165 },
              calories: 360,
            },
            {
              name: "Steel-Cut Oats",
              nutrients: { Fiber: 4, Magnesium: 56 },
              calories: 170,
            },
            {
              name: "Rice Noodles",
              nutrients: { Carbohydrates: 35, Iron: 1 },
              calories: 192,
            },
            {
              name: "Quinoa Flakes",
              nutrients: { Protein: 4, Magnesium: 50 },
              calories: 160,
            },
            {
              name: "Cracked Wheat",
              nutrients: { Fiber: 6, Iron: 1 },
              calories: 340,
            },
            {
              name: "Hominy",
              nutrients: { Fiber: 3, Calcium: 7 },
              calories: 119,
            },
            {
              name: "Puffed Rice",
              nutrients: { Carbohydrates: 30, Iron: 1 },
              calories: 100,
            },
            {
              name: "Ramen Noodles",
              nutrients: { Carbohydrates: 40, Iron: 3 },
              calories: 188,
            },
            {
              name: "Pasta",
              nutrients: { Carbohydrates: 30, Iron: 1 },
              calories: 200,
            },
            {
              name: "Sourdough Bread",
              nutrients: { Fiber: 2, Iron: 1 },
              calories: 180,
            },
            {
              name: "Rice Crackers",
              nutrients: { Carbohydrates: 12, Iron: 1 },
              calories: 60,
            },
          ],
        },
        {
          type: "Soups",
          items: [
            {
              name: "Tomato Soup",
              nutrients: { VitaminC: 30, Lycopene: "High" },
              calories: 74,
            },
            {
              name: "Minestrone",
              nutrients: { Fiber: 4, VitaminA: 1200 },
              calories: 112,
            },
            {
              name: "Lentil Soup",
              nutrients: { Protein: 8, Fiber: 9 },
              calories: 180,
            },
            {
              name: "Chicken Noodle Soup",
              nutrients: { Protein: 7, VitaminA: 100 },
              calories: 150,
            },
            {
              name: "Miso Soup",
              nutrients: { Probiotics: "High", Sodium: 750 },
              calories: 40,
            },
            {
              name: "Butternut Squash Soup",
              nutrients: { VitaminA: 1500, Fiber: 3 },
              calories: 100,
            },
            {
              name: "Vegetable Soup",
              nutrients: { Fiber: 3, VitaminC: 15 },
              calories: 90,
            },
            {
              name: "French Onion Soup",
              nutrients: { Fiber: 1, Iron: 0.5 },
              calories: 150,
            },
            {
              name: "Cream of Mushroom",
              nutrients: { VitaminD: 10, Calcium: 20 },
              calories: 210,
            },
            {
              name: "Black Bean Soup",
              nutrients: { Protein: 8, Fiber: 10 },
              calories: 180,
            },
            {
              name: "Corn Chowder",
              nutrients: { VitaminB6: 0.2, Fiber: 2 },
              calories: 200,
            },
            {
              name: "Split Pea Soup",
              nutrients: { Protein: 9, Fiber: 8 },
              calories: 180,
            },
            {
              name: "Clam Chowder",
              nutrients: { Iron: 2, Protein: 10 },
              calories: 250,
            },
            {
              name: "Gazpacho",
              nutrients: { VitaminC: 20, Lycopene: "High" },
              calories: 80,
            },
            {
              name: "Potato Leek Soup",
              nutrients: { Potassium: 450, VitaminC: 10 },
              calories: 160,
            },
            {
              name: "Carrot Ginger Soup",
              nutrients: { VitaminA: 1200, Fiber: 2 },
              calories: 90,
            },
            {
              name: "Pho",
              nutrients: { Protein: 15, VitaminC: 5 },
              calories: 200,
            },
            {
              name: "Tom Yum",
              nutrients: { VitaminC: 12, Spices: "High" },
              calories: 90,
            },
            {
              name: "Ramen",
              nutrients: { Carbohydrates: 40, Iron: 2 },
              calories: 250,
            },
            {
              name: "Cream of Broccoli",
              nutrients: { VitaminC: 30, Calcium: 40 },
              calories: 180,
            },
            {
              name: "Beef Barley Soup",
              nutrients: { Protein: 10, Fiber: 4 },
              calories: 220,
            },
            {
              name: "Coconut Curry Soup",
              nutrients: { HealthyFats: 10, Spices: "High" },
              calories: 190,
            },
            {
              name: "Egg Drop Soup",
              nutrients: { Protein: 6, Sodium: 700 },
              calories: 70,
            },
            {
              name: "Pumpkin Soup",
              nutrients: { VitaminA: 1500, Fiber: 2 },
              calories: 100,
            },
            {
              name: "Italian Wedding Soup",
              nutrients: { Protein: 10, VitaminA: 300 },
              calories: 150,
            },
            {
              name: "Matzo Ball Soup",
              nutrients: { Protein: 8, Sodium: 600 },
              calories: 120,
            },
            {
              name: "Soba Noodle Soup",
              nutrients: { Fiber: 2, VitaminB6: 0.1 },
              calories: 180,
            },
            {
              name: "Tomato Basil Bisque",
              nutrients: { VitaminC: 25, Fiber: 1 },
              calories: 160,
            },
            {
              name: "Broccoli Cheddar Soup",
              nutrients: { Calcium: 150, VitaminC: 20 },
              calories: 250,
            },
            {
              name: "Chicken Tortilla Soup",
              nutrients: { Protein: 8, Fiber: 4 },
              calories: 200,
            },
          ],
        },
        {
          type: "Salads",
          items: [
            {
              name: "Caesar Salad",
              nutrients: { VitaminK: 40, Calcium: 50 },
              calories: 180,
            },
            {
              name: "Greek Salad",
              nutrients: { VitaminA: 150, VitaminC: 20 },
              calories: 120,
            },
            {
              name: "Cobb Salad",
              nutrients: { Protein: 15, HealthyFats: 20 },
              calories: 300,
            },
            {
              name: "Caprese Salad",
              nutrients: { Calcium: 100, VitaminC: 10 },
              calories: 220,
            },
            {
              name: "Kale Salad",
              nutrients: { VitaminA: 2000, Fiber: 5 },
              calories: 150,
            },
            {
              name: "Pasta Salad",
              nutrients: { Carbohydrates: 30, Iron: 2 },
              calories: 250,
            },
            {
              name: "Spinach Salad",
              nutrients: { VitaminK: 300, VitaminA: 1500 },
              calories: 130,
            },
            {
              name: "Chickpea Salad",
              nutrients: { Protein: 8, Fiber: 7 },
              calories: 180,
            },
            {
              name: "Asian Slaw",
              nutrients: { VitaminC: 50, Fiber: 3 },
              calories: 90,
            },
            {
              name: "Waldorf Salad",
              nutrients: { VitaminC: 5, Fiber: 2 },
              calories: 200,
            },
            {
              name: "Niçoise Salad",
              nutrients: { Protein: 12, Omega3: 1.5 },
              calories: 250,
            },
            {
              name: "Quinoa Salad",
              nutrients: { Protein: 6, Fiber: 3 },
              calories: 180,
            },
            {
              name: "Fruit Salad",
              nutrients: { VitaminC: 25, Fiber: 2 },
              calories: 100,
            },
            {
              name: "Bean Salad",
              nutrients: { Protein: 8, Fiber: 6 },
              calories: 160,
            },
            {
              name: "Tabbouleh",
              nutrients: { Fiber: 3, VitaminC: 10 },
              calories: 110,
            },
            {
              name: "Broccoli Salad",
              nutrients: { VitaminC: 60, Fiber: 2 },
              calories: 150,
            },
            {
              name: "Orzo Salad",
              nutrients: { Carbohydrates: 20, Iron: 1 },
              calories: 220,
            },
            {
              name: "Avocado Salad",
              nutrients: { HealthyFats: 15, VitaminE: 3 },
              calories: 250,
            },
            {
              name: "Potato Salad",
              nutrients: { VitaminC: 10, Fiber: 2 },
              calories: 200,
            },
            {
              name: "Beet Salad",
              nutrients: { VitaminC: 10, Folate: 50 },
              calories: 120,
            },
            {
              name: "Cucumber Salad",
              nutrients: { VitaminK: 16, Hydration: "High" },
              calories: 60,
            },
            {
              name: "Pea Salad",
              nutrients: { Protein: 5, Fiber: 3 },
              calories: 110,
            },
            {
              name: "Fattoush",
              nutrients: { VitaminC: 15, Fiber: 2 },
              calories: 140,
            },
            {
              name: "Tofu Salad",
              nutrients: { Protein: 10, Calcium: 200 },
              calories: 180,
            },
            {
              name: "Lentil Salad",
              nutrients: { Protein: 9, Fiber: 8 },
              calories: 180,
            },
            {
              name: "Romaine Salad",
              nutrients: { VitaminK: 50, VitaminA: 1000 },
              calories: 30,
            },
            {
              name: "Panzanella",
              nutrients: { Fiber: 2, VitaminC: 10 },
              calories: 150,
            },
            {
              name: "Watermelon Feta Salad",
              nutrients: { VitaminC: 15, Calcium: 50 },
              calories: 110,
            },
            {
              name: "Tuna Salad",
              nutrients: { Protein: 20, Omega3: 0.8 },
              calories: 220,
            },
            {
              name: "Coleslaw",
              nutrients: { VitaminC: 45, Fiber: 2 },
              calories: 180,
            },
          ],
        },
        {
          type: "Dips",
          items: [
            {
              name: "Hummus",
              nutrients: { Protein: 7, Fiber: 4 },
              calories: 180,
            },
            {
              name: "Guacamole",
              nutrients: { HealthyFats: 15, VitaminE: 2.6 },
              calories: 150,
            },
            {
              name: "Salsa",
              nutrients: { VitaminC: 15, Antioxidants: "High" },
              calories: 25,
            },
            {
              name: "Tzatziki",
              nutrients: { Calcium: 40, Protein: 3 },
              calories: 100,
            },
            {
              name: "Baba Ganoush",
              nutrients: { Fiber: 3, VitaminB6: 0.1 },
              calories: 100,
            },
            {
              name: "Spinach Artichoke Dip",
              nutrients: { VitaminA: 200, Calcium: 100 },
              calories: 250,
            },
            {
              name: "French Onion Dip",
              nutrients: { Calcium: 20, VitaminC: 5 },
              calories: 200,
            },
            {
              name: "Bean Dip",
              nutrients: { Protein: 6, Fiber: 5 },
              calories: 150,
            },
            {
              name: "Queso",
              nutrients: { Calcium: 150, VitaminA: 90 },
              calories: 230,
            },
            {
              name: "Ranch Dip",
              nutrients: { Calcium: 30, VitaminA: 100 },
              calories: 220,
            },
            {
              name: "Buffalo Chicken Dip",
              nutrients: { Protein: 10, Calcium: 50 },
              calories: 250,
            },
            {
              name: "Avocado Cilantro Dip",
              nutrients: { HealthyFats: 12, VitaminE: 3 },
              calories: 140,
            },
            {
              name: "Roasted Red Pepper Dip",
              nutrients: { VitaminC: 25, Fiber: 1 },
              calories: 90,
            },
            {
              name: "Peanut Sauce",
              nutrients: { Protein: 5, HealthyFats: 10 },
              calories: 180,
            },
            {
              name: "Chimichurri",
              nutrients: { VitaminK: 15, Antioxidants: "High" },
              calories: 80,
            },
            {
              name: "Yogurt Dill Dip",
              nutrients: { Calcium: 50, Probiotics: "High" },
              calories: 70,
            },
            {
              name: "Pesto",
              nutrients: { HealthyFats: 10, VitaminE: 1.5 },
              calories: 180,
            },
            {
              name: "Garlic Aioli",
              nutrients: { HealthyFats: 15, VitaminE: 2 },
              calories: 200,
            },
            {
              name: "Blue Cheese Dip",
              nutrients: { Calcium: 100, VitaminA: 50 },
              calories: 250,
            },
            {
              name: "Cashew Cream",
              nutrients: { HealthyFats: 8, Magnesium: 30 },
              calories: 160,
            },
            {
              name: "Sriracha Mayo",
              nutrients: { VitaminC: 5, HealthyFats: 12 },
              calories: 200,
            },
            {
              name: "Eggplant Dip",
              nutrients: { Fiber: 2, VitaminB6: 0.1 },
              calories: 80,
            },
            {
              name: "Sweet Chili Dip",
              nutrients: { VitaminC: 10, Fiber: 1 },
              calories: 110,
            },
            {
              name: "Herbed Cream Cheese",
              nutrients: { Calcium: 60, VitaminA: 80 },
              calories: 250,
            },
            {
              name: "Sun-Dried Tomato Dip",
              nutrients: { VitaminC: 8, Iron: 0.5 },
              calories: 150,
            },
            {
              name: "Wasabi Dip",
              nutrients: { Antioxidants: "High", VitaminC: 5 },
              calories: 60,
            },
            {
              name: "Green Goddess Dip",
              nutrients: { VitaminK: 20, Fiber: 1 },
              calories: 120,
            },
            {
              name: "Miso Dip",
              nutrients: { Probiotics: "High", Sodium: 700 },
              calories: 90,
            },
            {
              name: "Roasted Garlic Hummus",
              nutrients: { Protein: 7, Fiber: 4 },
              calories: 180,
            },
            {
              name: "Cilantro Lime Dip",
              nutrients: { VitaminC: 15, HealthyFats: 5 },
              calories: 90,
            },
          ],
        },
        {
          type: "Fruits",
          items: [
            {
              name: "Apple",
              nutrients: { VitaminC: 8, Fiber: 4 },
              calories: 95,
            },
            {
              name: "Banana",
              nutrients: { Potassium: 450, VitaminB6: 0.4 },
              calories: 105,
            },
            {
              name: "Grapes",
              nutrients: { VitaminK: 22, Antioxidants: "High" },
              calories: 62,
            },
            {
              name: "Orange",
              nutrients: { VitaminC: 70, Fiber: 3 },
              calories: 62,
            },
            {
              name: "Strawberries",
              nutrients: { VitaminC: 58, Fiber: 3 },
              calories: 49,
            },
            {
              name: "Watermelon",
              nutrients: { Hydration: "High", VitaminA: 865 },
              calories: 85,
            },
            {
              name: "Blueberries",
              nutrients: { Antioxidants: "Very High", Fiber: 3 },
              calories: 84,
            },
            {
              name: "Pineapple",
              nutrients: { VitaminC: 79, Manganese: 76 },
              calories: 82,
            },
            {
              name: "Mango",
              nutrients: { VitaminA: 107, VitaminC: 60 },
              calories: 99,
            },
            {
              name: "Peach",
              nutrients: { VitaminC: 6.6, Fiber: 2.3 },
              calories: 59,
            },
            {
              name: "Cherries",
              nutrients: { Antioxidants: "High", Fiber: 3 },
              calories: 77,
            },
            {
              name: "Kiwi",
              nutrients: { VitaminC: 92, VitaminK: 40 },
              calories: 42,
            },
            {
              name: "Papaya",
              nutrients: { VitaminC: 60, VitaminA: 950 },
              calories: 59,
            },
            {
              name: "Plum",
              nutrients: { VitaminC: 6.3, Fiber: 1.6 },
              calories: 30,
            },
            {
              name: "Pomegranate",
              nutrients: { VitaminC: 9, Fiber: 4 },
              calories: 83,
            },
            {
              name: "Raspberries",
              nutrients: { VitaminC: 32, Fiber: 8 },
              calories: 64,
            },
            {
              name: "Blackberries",
              nutrients: { VitaminC: 21, Fiber: 8 },
              calories: 43,
            },
            {
              name: "Avocado",
              nutrients: { HealthyFats: 15, Potassium: 485 },
              calories: 160,
            },
            {
              name: "Cantaloupe",
              nutrients: { VitaminA: 1690, VitaminC: 58 },
              calories: 60,
            },
            {
              name: "Fig",
              nutrients: { Fiber: 3.7, Potassium: 232 },
              calories: 47,
            },
            {
              name: "Cranberries",
              nutrients: { VitaminC: 14, Fiber: 3.6 },
              calories: 46,
            },
            {
              name: "Guava",
              nutrients: { VitaminC: 228, Fiber: 5 },
              calories: 112,
            },
            {
              name: "Pear",
              nutrients: { Fiber: 6, VitaminC: 5 },
              calories: 101,
            },
            {
              name: "Nectarine",
              nutrients: { VitaminC: 7, Fiber: 2.4 },
              calories: 62,
            },
            {
              name: "Dragon Fruit",
              nutrients: { VitaminC: 9, Fiber: 3 },
              calories: 60,
            },
            {
              name: "Lychee",
              nutrients: { VitaminC: 72, Fiber: 1.3 },
              calories: 66,
            },
            {
              name: "Passion Fruit",
              nutrients: { Fiber: 24, VitaminC: 30 },
              calories: 229,
            },
            {
              name: "Apricot",
              nutrients: { VitaminA: 674, VitaminC: 10 },
              calories: 48,
            },
            {
              name: "Tangerine",
              nutrients: { VitaminC: 26, Fiber: 1.6 },
              calories: 47,
            },
          ],
        },
        {
          type: "Legumes",
          items: [
            {
              name: "Chickpeas",
              nutrients: { Protein: 15, Fiber: 12 },
              calories: 364,
            },
            {
              name: "Black Beans",
              nutrients: { Protein: 15, Fiber: 15 },
              calories: 227,
            },
            {
              name: "Lentils",
              nutrients: { Protein: 18, Fiber: 16 },
              calories: 230,
            },
            {
              name: "Kidney Beans",
              nutrients: { Protein: 13, Fiber: 9 },
              calories: 215,
            },
            {
              name: "Pinto Beans",
              nutrients: { Protein: 12, Fiber: 15 },
              calories: 245,
            },
            {
              name: "Edamame",
              nutrients: { Protein: 18, Fiber: 8 },
              calories: 188,
            },
            {
              name: "Green Peas",
              nutrients: { Protein: 5, Fiber: 4 },
              calories: 81,
            },
            {
              name: "Fava Beans",
              nutrients: { Protein: 13, Fiber: 9 },
              calories: 341,
            },
            {
              name: "Split Peas",
              nutrients: { Protein: 16, Fiber: 16 },
              calories: 231,
            },
            {
              name: "Mung Beans",
              nutrients: { Protein: 14, Fiber: 15 },
              calories: 212,
            },
            {
              name: "Navy Beans",
              nutrients: { Protein: 15, Fiber: 19 },
              calories: 255,
            },
            {
              name: "Soybeans",
              nutrients: { Protein: 36, Fiber: 9 },
              calories: 446,
            },
            {
              name: "Adzuki Beans",
              nutrients: { Protein: 17, Fiber: 13 },
              calories: 294,
            },
            {
              name: "Lima Beans",
              nutrients: { Protein: 8, Fiber: 5 },
              calories: 209,
            },
            {
              name: "Cannellini Beans",
              nutrients: { Protein: 12, Fiber: 11 },
              calories: 225,
            },
            {
              name: "Pigeon Peas",
              nutrients: { Protein: 11, Fiber: 8 },
              calories: 142,
            },
            {
              name: "Butter Beans",
              nutrients: { Protein: 6, Fiber: 8 },
              calories: 110,
            },
            {
              name: "Black-eyed Peas",
              nutrients: { Protein: 13, Fiber: 11 },
              calories: 200,
            },
            {
              name: "Red Lentils",
              nutrients: { Protein: 17, Fiber: 15 },
              calories: 230,
            },
            {
              name: "White Beans",
              nutrients: { Protein: 17, Fiber: 11 },
              calories: 225,
            },
            {
              name: "Field Peas",
              nutrients: { Protein: 13, Fiber: 9 },
              calories: 117,
            },
            {
              name: "Yellow Split Peas",
              nutrients: { Protein: 16, Fiber: 16 },
              calories: 230,
            },
            {
              name: "Green Gram",
              nutrients: { Protein: 14, Fiber: 15 },
              calories: 212,
            },
            {
              name: "Snow Peas",
              nutrients: { Protein: 2.8, Fiber: 1.7 },
              calories: 42,
            },
            {
              name: "Borlotti Beans",
              nutrients: { Protein: 14, Fiber: 16 },
              calories: 335,
            },
            {
              name: "Garbanzos",
              nutrients: { Protein: 15, Fiber: 12 },
              calories: 364,
            },
            {
              name: "Pea Pods",
              nutrients: { Protein: 5, Fiber: 4 },
              calories: 81,
            },
            {
              name: "Cranberry Beans",
              nutrients: { Protein: 16, Fiber: 17 },
              calories: 337,
            },
            {
              name: "Brown Lentils",
              nutrients: { Protein: 18, Fiber: 16 },
              calories: 230,
            },
          ],
        },
      ],
    },
    {
      name: "Supper",
      description:
        "Supper, or dinner, is the last meal of the day and is essential for providing the body with the nutrients needed for overnight recovery. It should be nourishing but not too heavy, allowing for restful sleep.",
      components: [
        {
          type: "Lean Proteins",
          items: [
            {
              name: "Grilled Chicken Breast",
              nutrients: { Protein: 31, Fat: 3.6 },
              calories: 165,
            },
            {
              name: "Turkey Breast",
              nutrients: { Protein: 29, Fat: 1 },
              calories: 135,
            },
            {
              name: "Lean Beef Steak",
              nutrients: { Protein: 25, Fat: 5 },
              calories: 160,
            },
            {
              name: "Pork Tenderloin",
              nutrients: { Protein: 22, Fat: 4 },
              calories: 122,
            },
            { name: "Tofu", nutrients: { Protein: 8, Fat: 4.8 }, calories: 76 },
            {
              name: "Tempeh",
              nutrients: { Protein: 21, Fat: 11 },
              calories: 195,
            },
            {
              name: "Cottage Cheese",
              nutrients: { Protein: 11, Fat: 4.3 },
              calories: 98,
            },
            {
              name: "Lamb Loin Chops",
              nutrients: { Protein: 25, Fat: 16 },
              calories: 282,
            },
            {
              name: "Quail",
              nutrients: { Protein: 25, Fat: 6 },
              calories: 200,
            },
            {
              name: "Venison",
              nutrients: { Protein: 30, Fat: 3 },
              calories: 158,
            },
            {
              name: "Bison Meat",
              nutrients: { Protein: 20, Fat: 10 },
              calories: 143,
            },
            {
              name: "Egg Whites",
              nutrients: { Protein: 11, Fat: 0.2 },
              calories: 52,
            },
            {
              name: "Seitan",
              nutrients: { Protein: 25, Fat: 1.9 },
              calories: 140,
            },
            {
              name: "Rabbit",
              nutrients: { Protein: 28, Fat: 3.5 },
              calories: 180,
            },
            {
              name: "Pheasant",
              nutrients: { Protein: 27, Fat: 6 },
              calories: 200,
            },
            {
              name: "Duck Breast (skinless)",
              nutrients: { Protein: 24, Fat: 2.5 },
              calories: 140,
            },
            {
              name: "Cornish Hen",
              nutrients: { Protein: 26, Fat: 7 },
              calories: 170,
            },
            {
              name: "Buffalo",
              nutrients: { Protein: 30, Fat: 4 },
              calories: 175,
            },
            {
              name: "Ostrich",
              nutrients: { Protein: 29, Fat: 2.8 },
              calories: 140,
            },
            {
              name: "Ham (low-sodium)",
              nutrients: { Protein: 21, Fat: 3 },
              calories: 130,
            },
            {
              name: "Goose (skinless)",
              nutrients: { Protein: 28, Fat: 4 },
              calories: 160,
            },
            {
              name: "Soy Protein",
              nutrients: { Protein: 36, Fat: 2 },
              calories: 200,
            },
            {
              name: "Chicken Thigh (skinless)",
              nutrients: { Protein: 21, Fat: 9 },
              calories: 209,
            },
            {
              name: "Beef Liver",
              nutrients: { Protein: 26, Fat: 3.6 },
              calories: 175,
            },
            {
              name: "Crab Meat",
              nutrients: { Protein: 18, Fat: 1 },
              calories: 84,
            },
            {
              name: "Swordfish",
              nutrients: { Protein: 19, Fat: 5 },
              calories: 146,
            },
            {
              name: "Trout",
              nutrients: { Protein: 20, Fat: 3.5 },
              calories: 120,
            },
            {
              name: "Pork Chops (lean)",
              nutrients: { Protein: 24, Fat: 6 },
              calories: 180,
            },
            {
              name: "Ground Turkey (lean)",
              nutrients: { Protein: 27, Fat: 8 },
              calories: 186,
            },
            {
              name: "Squirrel",
              nutrients: { Protein: 27, Fat: 5 },
              calories: 170,
            },
          ],
        },
        {
          type: "Carbohydrates",
          items: [
            {
              name: "Quinoa",
              nutrients: { Fiber: 5, Protein: 8 },
              calories: 120,
            },
            {
              name: "Brown Rice",
              nutrients: { Fiber: 3.5, Protein: 7 },
              calories: 215,
            },
            {
              name: "Sweet Potato",
              nutrients: { Fiber: 4, VitaminA: 19200 },
              calories: 103,
            },
            {
              name: "Farro",
              nutrients: { Fiber: 5, Protein: 7 },
              calories: 170,
            },
            {
              name: "Bulgur",
              nutrients: { Fiber: 4.5, Protein: 6 },
              calories: 151,
            },
            {
              name: "Barley",
              nutrients: { Fiber: 6, Protein: 3.5 },
              calories: 193,
            },
            {
              name: "Millet",
              nutrients: { Fiber: 2.3, Magnesium: 114 },
              calories: 119,
            },
            {
              name: "Wild Rice",
              nutrients: { Fiber: 3, Protein: 6.5 },
              calories: 166,
            },
            {
              name: "Oats",
              nutrients: { Fiber: 4, Protein: 6 },
              calories: 150,
            },
            {
              name: "Couscous",
              nutrients: { Fiber: 2, Protein: 6 },
              calories: 176,
            },
            {
              name: "Spelt",
              nutrients: { Fiber: 4, Protein: 5.5 },
              calories: 123,
            },
            {
              name: "Teff",
              nutrients: { Fiber: 3, Calcium: 123 },
              calories: 101,
            },
            {
              name: "Amaranth",
              nutrients: { Fiber: 5, Iron: 5 },
              calories: 251,
            },
            {
              name: "Freekeh",
              nutrients: { Fiber: 4.5, Protein: 8 },
              calories: 130,
            },
            {
              name: "Red Lentils",
              nutrients: { Fiber: 5, Protein: 9 },
              calories: 180,
            },
            {
              name: "Black Rice",
              nutrients: { Fiber: 4, Protein: 5 },
              calories: 200,
            },
            {
              name: "Whole Wheat Pasta",
              nutrients: { Fiber: 6, Protein: 7 },
              calories: 174,
            },
            {
              name: "Basmati Rice",
              nutrients: { Fiber: 1, Protein: 3.5 },
              calories: 205,
            },
            {
              name: "Steel-Cut Oats",
              nutrients: { Fiber: 4, Protein: 7 },
              calories: 150,
            },
            { name: "Polenta", nutrients: { Fiber: 1, Iron: 1 }, calories: 70 },
            { name: "Rye", nutrients: { Fiber: 5, Protein: 9 }, calories: 170 },
            {
              name: "Sprouted Grain Bread",
              nutrients: { Fiber: 4, Protein: 7 },
              calories: 80,
            },
            {
              name: "Chickpea Pasta",
              nutrients: { Fiber: 8, Protein: 14 },
              calories: 190,
            },
            {
              name: "Black Bean Pasta",
              nutrients: { Fiber: 6, Protein: 13 },
              calories: 180,
            },
            {
              name: "Sweet Corn",
              nutrients: { Fiber: 2, VitaminC: 10 },
              calories: 90,
            },
            {
              name: "Pumpkin",
              nutrients: { Fiber: 2.5, VitaminA: 8000 },
              calories: 50,
            },
            {
              name: "Acorn Squash",
              nutrients: { Fiber: 2.1, VitaminC: 15 },
              calories: 56,
            },
            {
              name: "Butternut Squash",
              nutrients: { Fiber: 3, VitaminA: 10000 },
              calories: 82,
            },
            {
              name: "Buckwheat",
              nutrients: { Fiber: 4, Magnesium: 86 },
              calories: 155,
            },
            {
              name: "Spaghetti Squash",
              nutrients: { Fiber: 2.2, VitaminC: 9 },
              calories: 42,
            },
          ],
        },
        {
          type: "Vegetables",
          items: [
            {
              name: "Broccoli",
              nutrients: { VitaminC: 89, Fiber: 3.8 },
              calories: 55,
            },
            {
              name: "Spinach",
              nutrients: { Iron: 2.7, VitaminA: 9377 },
              calories: 23,
            },
            {
              name: "Carrots",
              nutrients: { VitaminA: 16706, Fiber: 2.8 },
              calories: 41,
            },
            {
              name: "Kale",
              nutrients: { VitaminK: 390, VitaminA: 9990 },
              calories: 35,
            },
            {
              name: "Cauliflower",
              nutrients: { VitaminC: 48, Fiber: 2 },
              calories: 25,
            },
            {
              name: "Green Beans",
              nutrients: { VitaminK: 14, Fiber: 2.7 },
              calories: 31,
            },
            {
              name: "Bell Peppers",
              nutrients: { VitaminC: 152, VitaminA: 3726 },
              calories: 40,
            },
            {
              name: "Asparagus",
              nutrients: { VitaminK: 41, Folate: 52 },
              calories: 20,
            },
            {
              name: "Brussels Sprouts",
              nutrients: { VitaminC: 85, Fiber: 3.8 },
              calories: 43,
            },
            {
              name: "Zucchini",
              nutrients: { VitaminC: 17, Fiber: 1.2 },
              calories: 17,
            },
            {
              name: "Sweet Peas",
              nutrients: { VitaminC: 40, Fiber: 5 },
              calories: 81,
            },
            {
              name: "Eggplant",
              nutrients: { Fiber: 3, VitaminB6: 0.1 },
              calories: 25,
            },
            {
              name: "Tomatoes",
              nutrients: { VitaminC: 13.7, Lycopene: "High" },
              calories: 18,
            },
            {
              name: "Radishes",
              nutrients: { VitaminC: 14.8, Fiber: 1.6 },
              calories: 16,
            },
            {
              name: "Cabbage",
              nutrients: { VitaminK: 76, Fiber: 2.5 },
              calories: 25,
            },
            {
              name: "Artichokes",
              nutrients: { Fiber: 10.3, VitaminC: 15 },
              calories: 47,
            },
            {
              name: "Leeks",
              nutrients: { VitaminK: 47, Folate: 30 },
              calories: 61,
            },
            {
              name: "Okra",
              nutrients: { VitaminC: 23, Fiber: 3 },
              calories: 33,
            },
            {
              name: "Pumpkin",
              nutrients: { VitaminA: 8500, Fiber: 2 },
              calories: 26,
            },
            {
              name: "Swiss Chard",
              nutrients: { VitaminK: 830, VitaminA: 2146 },
              calories: 19,
            },
            {
              name: "Bok Choy",
              nutrients: { VitaminA: 4468, VitaminC: 45 },
              calories: 13,
            },
            {
              name: "Beets",
              nutrients: { Fiber: 3.8, Folate: 148 },
              calories: 43,
            },
            {
              name: "Celery",
              nutrients: { VitaminK: 30, Fiber: 1.6 },
              calories: 16,
            },
            {
              name: "Mushrooms",
              nutrients: { VitaminD: 18, Fiber: 1 },
              calories: 22,
            },
            {
              name: "Watercress",
              nutrients: { VitaminA: 3191, VitaminC: 11 },
              calories: 11,
            },
            {
              name: "Collard Greens",
              nutrients: { VitaminK: 772, Calcium: 232 },
              calories: 32,
            },
            {
              name: "Parsnips",
              nutrients: { Fiber: 3.6, VitaminC: 17 },
              calories: 75,
            },
            {
              name: "Rutabaga",
              nutrients: { VitaminC: 25, Fiber: 2.3 },
              calories: 37,
            },
            {
              name: "Turnips",
              nutrients: { VitaminC: 21, Fiber: 1.8 },
              calories: 28,
            },
          ],
        },
        {
          type: "Healthy Fats",
          items: [
            {
              name: "Avocado",
              nutrients: { HealthyFats: 15, Fiber: 7 },
              calories: 160,
            },
            {
              name: "Olive Oil",
              nutrients: { MonounsaturatedFats: 10, VitaminE: 1.9 },
              calories: 119,
            },
            {
              name: "Almonds",
              nutrients: { HealthyFats: 14, Protein: 6 },
              calories: 160,
            },
            {
              name: "Walnuts",
              nutrients: { Omega3: 2.5, Protein: 4 },
              calories: 185,
            },
            {
              name: "Chia Seeds",
              nutrients: { Omega3: 5, Fiber: 10 },
              calories: 137,
            },
            {
              name: "Flaxseeds",
              nutrients: { Omega3: 6, Fiber: 8 },
              calories: 150,
            },
            {
              name: "Pistachios",
              nutrients: { HealthyFats: 13, Fiber: 3 },
              calories: 156,
            },
            {
              name: "Pecans",
              nutrients: { HealthyFats: 20, Fiber: 2.7 },
              calories: 196,
            },
            {
              name: "Macadamia Nuts",
              nutrients: { MonounsaturatedFats: 17, Fiber: 2.4 },
              calories: 204,
            },
            {
              name: "Pumpkin Seeds",
              nutrients: { HealthyFats: 13, Magnesium: 168 },
              calories: 151,
            },
            {
              name: "Cashews",
              nutrients: { HealthyFats: 12, Protein: 5 },
              calories: 157,
            },
            {
              name: "Sesame Seeds",
              nutrients: { HealthyFats: 14, Calcium: 88 },
              calories: 160,
            },
            {
              name: "Sunflower Seeds",
              nutrients: { HealthyFats: 14, VitaminE: 7.4 },
              calories: 165,
            },
            {
              name: "Hemp Seeds",
              nutrients: { Omega3: 1, Protein: 9.5 },
              calories: 120,
            },
            {
              name: "Brazil Nuts",
              nutrients: { Selenium: 544, HealthyFats: 19 },
              calories: 187,
            },
            {
              name: "Hazelnuts",
              nutrients: { HealthyFats: 15, Fiber: 2.7 },
              calories: 178,
            },
            {
              name: "Coconut Oil",
              nutrients: { SaturatedFats: 14, LauricAcid: "High" },
              calories: 117,
            },
            {
              name: "Ghee",
              nutrients: { HealthyFats: 14, VitaminA: 300 },
              calories: 112,
            },
            {
              name: "Tahini",
              nutrients: { HealthyFats: 17, Calcium: 128 },
              calories: 178,
            },
            {
              name: "Almond Butter",
              nutrients: { HealthyFats: 16, Fiber: 3 },
              calories: 196,
            },
            {
              name: "Peanut Butter",
              nutrients: { HealthyFats: 16, Protein: 8 },
              calories: 190,
            },
            {
              name: "Coconut Milk",
              nutrients: { SaturatedFats: 12, Iron: 2.2 },
              calories: 230,
            },
            {
              name: "Dark Chocolate",
              nutrients: { Antioxidants: "High", Iron: 3.4 },
              calories: 170,
            },
            {
              name: "Pine Nuts",
              nutrients: { HealthyFats: 19, VitaminK: 15 },
              calories: 188,
            },
            {
              name: "MCT Oil",
              nutrients: { SaturatedFats: 14, QuickEnergy: "High" },
              calories: 130,
            },
            {
              name: "Avocado Oil",
              nutrients: { MonounsaturatedFats: 10, VitaminE: 1.6 },
              calories: 124,
            },
            {
              name: "Walnut Oil",
              nutrients: { Omega3: 1.4, HealthyFats: 14 },
              calories: 120,
            },
            {
              name: "Safflower Oil",
              nutrients: { MonounsaturatedFats: 13, VitaminE: 4.5 },
              calories: 120,
            },
            {
              name: "Algae Oil",
              nutrients: { Omega3: 1.3, VitaminK: 30 },
              calories: 120,
            },
          ],
        },
        {
          type: "Light Beverages",
          items: [
            {
              name: "Chamomile Tea",
              nutrients: { Relaxants: "High" },
              calories: 0,
            },
            {
              name: "Peppermint Tea",
              nutrients: { Menthol: "High" },
              calories: 0,
            },
            {
              name: "Green Tea",
              nutrients: { Antioxidants: "High", Caffeine: 20 },
              calories: 2,
            },
            {
              name: "Herbal Tea",
              nutrients: { Antioxidants: "Varied" },
              calories: 0,
            },
            {
              name: "Hibiscus Tea",
              nutrients: { Antioxidants: "High" },
              calories: 0,
            },
            {
              name: "Rooibos Tea",
              nutrients: { Antioxidants: "High" },
              calories: 0,
            },
            { name: "Lemon Water", nutrients: { VitaminC: 30 }, calories: 5 },
            {
              name: "Cucumber Water",
              nutrients: { Hydration: "High" },
              calories: 5,
            },
            {
              name: "Ginger Water",
              nutrients: { AntiInflammatory: "High" },
              calories: 8,
            },
            {
              name: "Coconut Water",
              nutrients: { Potassium: 600 },
              calories: 46,
            },
            {
              name: "Lavender Tea",
              nutrients: { Relaxants: "High" },
              calories: 0,
            },
            {
              name: "Sparkling Water",
              nutrients: { Minerals: "Trace" },
              calories: 0,
            },
            {
              name: "Berry Infused Water",
              nutrients: { Antioxidants: "Moderate" },
              calories: 10,
            },
            { name: "Lime Water", nutrients: { VitaminC: 15 }, calories: 5 },
            {
              name: "Turmeric Water",
              nutrients: { AntiInflammatory: "High" },
              calories: 5,
            },
            {
              name: "Orange Infused Water",
              nutrients: { VitaminC: 20 },
              calories: 10,
            },
            {
              name: "Cranberry Water",
              nutrients: { VitaminC: 20 },
              calories: 12,
            },
            {
              name: "Mint Water",
              nutrients: { Refreshing: "High" },
              calories: 5,
            },
            {
              name: "Basil Water",
              nutrients: { Antioxidants: "Trace" },
              calories: 5,
            },
            { name: "Sage Tea", nutrients: { Soothing: "High" }, calories: 0 },
            {
              name: "Honey Lemon Water",
              nutrients: { VitaminC: 20 },
              calories: 25,
            },
            { name: "Rose Tea", nutrients: { VitaminC: 7.5 }, calories: 0 },
            {
              name: "Apple Cider Vinegar Water",
              nutrients: { AceticAcid: "High" },
              calories: 5,
            },
            {
              name: "Chamomile Honey Tea",
              nutrients: { Relaxants: "High" },
              calories: 15,
            },
            {
              name: "Raspberry Leaf Tea",
              nutrients: { Tannins: "High" },
              calories: 0,
            },
            {
              name: "Spearmint Tea",
              nutrients: { Menthol: "High" },
              calories: 0,
            },
            {
              name: "Jasmine Tea",
              nutrients: { Antioxidants: "High" },
              calories: 2,
            },
            { name: "Oolong Tea", nutrients: { Caffeine: 30 }, calories: 3 },
            {
              name: "White Tea",
              nutrients: { Antioxidants: "High" },
              calories: 1,
            },
            {
              name: "Iced Green Tea",
              nutrients: { Antioxidants: "High" },
              calories: 5,
            },
          ],
        },
        {
          type: "Seafood",
          items: [
            {
              name: "Salmon",
              nutrients: { Omega3: 2.6, Protein: 25 },
              calories: 208,
            },
            {
              name: "Tuna",
              nutrients: { Omega3: 0.5, Protein: 29 },
              calories: 130,
            },
            {
              name: "Shrimp",
              nutrients: { Protein: 24, Selenium: 48 },
              calories: 99,
            },
            {
              name: "Crab",
              nutrients: { Protein: 18, VitaminB12: 9 },
              calories: 84,
            },
            {
              name: "Lobster",
              nutrients: { Protein: 19, Zinc: 7 },
              calories: 89,
            },
            {
              name: "Oysters",
              nutrients: { Zinc: 78, Protein: 9 },
              calories: 50,
            },
            {
              name: "Mussels",
              nutrients: { VitaminB12: 20, Protein: 14 },
              calories: 86,
            },
            {
              name: "Sardines",
              nutrients: { Omega3: 1.4, Calcium: 382 },
              calories: 208,
            },
            {
              name: "Clams",
              nutrients: { Iron: 23.8, Protein: 12 },
              calories: 74,
            },
            {
              name: "Halibut",
              nutrients: { Protein: 23, Magnesium: 109 },
              calories: 186,
            },
            {
              name: "Cod",
              nutrients: { Protein: 20, Selenium: 44 },
              calories: 82,
            },
            {
              name: "Mackerel",
              nutrients: { Omega3: 2.6, Protein: 18 },
              calories: 205,
            },
            {
              name: "Trout",
              nutrients: { Omega3: 1.1, Protein: 20 },
              calories: 120,
            },
            {
              name: "Swordfish",
              nutrients: { Protein: 19, VitaminD: 3 },
              calories: 146,
            },
            {
              name: "Snapper",
              nutrients: { Protein: 22, Magnesium: 34 },
              calories: 100,
            },
            {
              name: "Tilapia",
              nutrients: { Protein: 21, Potassium: 380 },
              calories: 128,
            },
            {
              name: "Herring",
              nutrients: { Omega3: 1.5, VitaminD: 5 },
              calories: 158,
            },
            {
              name: "Pollock",
              nutrients: { Protein: 20, VitaminB12: 1.2 },
              calories: 92,
            },
            {
              name: "Scallops",
              nutrients: { Protein: 20, Magnesium: 55 },
              calories: 88,
            },
            {
              name: "Anchovies",
              nutrients: { Omega3: 2.1, Protein: 17 },
              calories: 131,
            },
            {
              name: "Sea Bass",
              nutrients: { Protein: 23, Potassium: 279 },
              calories: 97,
            },
            {
              name: "Octopus",
              nutrients: { Protein: 30, Iron: 9.5 },
              calories: 164,
            },
            {
              name: "Perch",
              nutrients: { Protein: 19, Phosphorus: 200 },
              calories: 91,
            },
            {
              name: "Walleye",
              nutrients: { Protein: 21, Potassium: 300 },
              calories: 105,
            },
            {
              name: "Monkfish",
              nutrients: { Protein: 16, Magnesium: 30 },
              calories: 76,
            },
            {
              name: "Catfish",
              nutrients: { Protein: 15, VitaminB12: 2.3 },
              calories: 105,
            },
            {
              name: "Flounder",
              nutrients: { Protein: 14, Selenium: 20 },
              calories: 86,
            },
            {
              name: "Crayfish",
              nutrients: { Protein: 14, VitaminE: 1.6 },
              calories: 70,
            },
            {
              name: "Barramundi",
              nutrients: { Omega3: 0.6, Protein: 23 },
              calories: 140,
            },
            {
              name: "Rockfish",
              nutrients: { Protein: 19, Phosphorus: 230 },
              calories: 110,
            },
          ],
        },
        {
          type: "Pasta",
          items: [
            {
              name: "Spaghetti",
              nutrients: { Carbohydrates: 31, Protein: 6 },
              calories: 158,
            },
            {
              name: "Penne",
              nutrients: { Carbohydrates: 35, Protein: 7 },
              calories: 170,
            },
            {
              name: "Fettuccine",
              nutrients: { Carbohydrates: 29, Protein: 5 },
              calories: 155,
            },
            {
              name: "Macaroni",
              nutrients: { Carbohydrates: 33, Protein: 6 },
              calories: 164,
            },
            {
              name: "Linguine",
              nutrients: { Carbohydrates: 32, Protein: 6 },
              calories: 160,
            },
            {
              name: "Tagliatelle",
              nutrients: { Carbohydrates: 36, Protein: 7 },
              calories: 180,
            },
            {
              name: "Rigatoni",
              nutrients: { Carbohydrates: 34, Protein: 6 },
              calories: 168,
            },
            {
              name: "Lasagna",
              nutrients: { Carbohydrates: 31, Protein: 7 },
              calories: 170,
            },
            {
              name: "Ravioli",
              nutrients: { Carbohydrates: 25, Protein: 8 },
              calories: 200,
            },
            {
              name: "Tortellini",
              nutrients: { Carbohydrates: 26, Protein: 9 },
              calories: 210,
            },
            {
              name: "Orzo",
              nutrients: { Carbohydrates: 30, Protein: 5 },
              calories: 150,
            },
            {
              name: "Bucatini",
              nutrients: { Carbohydrates: 32, Protein: 6 },
              calories: 160,
            },
            {
              name: "Cavatappi",
              nutrients: { Carbohydrates: 35, Protein: 7 },
              calories: 172,
            },
            {
              name: "Pappardelle",
              nutrients: { Carbohydrates: 36, Protein: 6 },
              calories: 185,
            },
            {
              name: "Vermicelli",
              nutrients: { Carbohydrates: 34, Protein: 5 },
              calories: 160,
            },
            {
              name: "Whole Wheat Pasta",
              nutrients: { Carbohydrates: 29, Fiber: 6 },
              calories: 180,
            },
            {
              name: "Gluten-Free Pasta",
              nutrients: { Carbohydrates: 35, Protein: 4 },
              calories: 170,
            },
            {
              name: "Rice Noodles",
              nutrients: { Carbohydrates: 43, Protein: 2 },
              calories: 192,
            },
            {
              name: "Egg Noodles",
              nutrients: { Carbohydrates: 40, Protein: 8 },
              calories: 200,
            },
            {
              name: "Ziti",
              nutrients: { Carbohydrates: 34, Protein: 6 },
              calories: 165,
            },
            {
              name: "Orecchiette",
              nutrients: { Carbohydrates: 32, Protein: 6 },
              calories: 162,
            },
            {
              name: "Shell Pasta",
              nutrients: { Carbohydrates: 30, Protein: 5 },
              calories: 155,
            },
            {
              name: "Farfalline",
              nutrients: { Carbohydrates: 33, Protein: 6 },
              calories: 170,
            },
            {
              name: "Gemelli",
              nutrients: { Carbohydrates: 31, Protein: 6 },
              calories: 160,
            },
            {
              name: "Conchiglie",
              nutrients: { Carbohydrates: 35, Protein: 7 },
              calories: 175,
            },
            {
              name: "Trottole",
              nutrients: { Carbohydrates: 34, Protein: 7 },
              calories: 180,
            },
            {
              name: "Rotini",
              nutrients: { Carbohydrates: 36, Protein: 6 },
              calories: 185,
            },
            {
              name: "Cannelloni",
              nutrients: { Carbohydrates: 29, Protein: 8 },
              calories: 190,
            },
            {
              name: "Anellini",
              nutrients: { Carbohydrates: 32, Protein: 5 },
              calories: 160,
            },
            {
              name: "Soba Noodles",
              nutrients: { Carbohydrates: 24, Protein: 5 },
              calories: 130,
            },
          ],
        },
        {
          type: "Side Dishes",
          items: [
            {
              name: "Garlic Bread",
              nutrients: { Carbohydrates: 20, Fat: 7 },
              calories: 150,
            },
            {
              name: "Mashed Potatoes",
              nutrients: { Carbohydrates: 30, Potassium: 620 },
              calories: 200,
            },
            {
              name: "Coleslaw",
              nutrients: { Fiber: 2, VitaminC: 20 },
              calories: 150,
            },
            {
              name: "Roasted Vegetables",
              nutrients: { Fiber: 3, VitaminA: 200 },
              calories: 110,
            },
            {
              name: "Steamed Asparagus",
              nutrients: { VitaminK: 50, Fiber: 2 },
              calories: 40,
            },
            {
              name: "Couscous",
              nutrients: { Carbohydrates: 22, Protein: 4 },
              calories: 120,
            },
            {
              name: "Quinoa Salad",
              nutrients: { Protein: 8, Fiber: 5 },
              calories: 150,
            },
            {
              name: "Grilled Zucchini",
              nutrients: { VitaminC: 10, Fiber: 1.5 },
              calories: 30,
            },
            {
              name: "Baked Beans",
              nutrients: { Protein: 7, Fiber: 5 },
              calories: 130,
            },
            {
              name: "Sweet Potato Fries",
              nutrients: { VitaminA: 400, Fiber: 3 },
              calories: 180,
            },
            {
              name: "Pickled Vegetables",
              nutrients: { Probiotics: "High" },
              calories: 30,
            },
            {
              name: "Cucumber Salad",
              nutrients: { VitaminK: 16, Hydration: "High" },
              calories: 25,
            },
            {
              name: "Wild Rice",
              nutrients: { Carbohydrates: 21, Protein: 4 },
              calories: 101,
            },
            {
              name: "Cornbread",
              nutrients: { Carbohydrates: 25, Fiber: 1 },
              calories: 180,
            },
            {
              name: "Potato Wedges",
              nutrients: { Carbohydrates: 24, Potassium: 400 },
              calories: 170,
            },
            {
              name: "Green Bean Almondine",
              nutrients: { VitaminK: 20, Fiber: 2 },
              calories: 90,
            },
            {
              name: "Stuffed Bell Peppers",
              nutrients: { VitaminC: 40, Fiber: 4 },
              calories: 150,
            },
            {
              name: "Roasted Cauliflower",
              nutrients: { VitaminC: 20, Fiber: 2.5 },
              calories: 80,
            },
            {
              name: "Buttered Corn",
              nutrients: { Carbohydrates: 19, Fiber: 2 },
              calories: 140,
            },
            {
              name: "Baked Mac and Cheese",
              nutrients: { Protein: 10, Calcium: 150 },
              calories: 250,
            },
            {
              name: "Grilled Pineapple",
              nutrients: { VitaminC: 50 },
              calories: 70,
            },
            {
              name: "Sautéed Mushrooms",
              nutrients: { VitaminD: 15, Fiber: 1 },
              calories: 50,
            },
            {
              name: "Fried Plantains",
              nutrients: { Carbohydrates: 30, Fiber: 2 },
              calories: 190,
            },
            {
              name: "Caesar Salad",
              nutrients: { VitaminK: 35, Calcium: 40 },
              calories: 180,
            },
            {
              name: "Tabbouleh",
              nutrients: { Fiber: 5, VitaminC: 12 },
              calories: 130,
            },
            {
              name: "Bruschetta",
              nutrients: { VitaminC: 8, Fiber: 1 },
              calories: 110,
            },
            {
              name: "Parmesan Roasted Broccoli",
              nutrients: { VitaminC: 90, Fiber: 3 },
              calories: 100,
            },
            {
              name: "Fried Rice",
              nutrients: { Carbohydrates: 25, Protein: 5 },
              calories: 200,
            },
            {
              name: "Crispy Brussels Sprouts",
              nutrients: { Fiber: 4, VitaminC: 70 },
              calories: 120,
            },
            {
              name: "Tomato Basil Soup",
              nutrients: { VitaminA: 100, VitaminC: 15 },
              calories: 90,
            },
          ],
        },
        {
          type: "Herbs & Seasonings",
          items: [
            { name: "Basil", nutrients: { VitaminK: 98 }, calories: 5 },
            {
              name: "Oregano",
              nutrients: { Antioxidants: "High" },
              calories: 6,
            },
            { name: "Thyme", nutrients: { VitaminC: 4 }, calories: 5 },
            { name: "Rosemary", nutrients: { Fiber: 2 }, calories: 10 },
            { name: "Cilantro", nutrients: { VitaminA: 13 }, calories: 1 },
            { name: "Parsley", nutrients: { VitaminK: 164 }, calories: 4 },
            { name: "Chives", nutrients: { VitaminC: 9 }, calories: 3 },
            { name: "Dill", nutrients: { Calcium: 14 }, calories: 4 },
            { name: "Mint", nutrients: { Menthol: "High" }, calories: 4 },
            { name: "Sage", nutrients: { VitaminK: 34 }, calories: 5 },
            { name: "Tarragon", nutrients: { VitaminA: 3 }, calories: 7 },
            { name: "Fennel Seeds", nutrients: { Fiber: 2 }, calories: 20 },
            { name: "Bay Leaves", nutrients: { VitaminC: 4 }, calories: 6 },
            {
              name: "Black Pepper",
              nutrients: { Piperine: "High" },
              calories: 5,
            },
            {
              name: "Garlic Powder",
              nutrients: { Allicin: "Trace" },
              calories: 10,
            },
            { name: "Cumin", nutrients: { Iron: 10 }, calories: 8 },
            { name: "Paprika", nutrients: { VitaminA: 100 }, calories: 6 },
            { name: "Turmeric", nutrients: { Curcumin: "High" }, calories: 9 },
            {
              name: "Cinnamon",
              nutrients: { Antioxidants: "High" },
              calories: 7,
            },
            { name: "Cardamom", nutrients: { Fiber: 2 }, calories: 20 },
            { name: "Nutmeg", nutrients: { Manganese: 12 }, calories: 15 },
            {
              name: "Cayenne Pepper",
              nutrients: { Capsaicin: "High" },
              calories: 5,
            },
            { name: "Chili Flakes", nutrients: { VitaminC: 6 }, calories: 6 },
            {
              name: "Saffron",
              nutrients: { Antioxidants: "High" },
              calories: 2,
            },
            {
              name: "Vanilla",
              nutrients: { Antioxidants: "Moderate" },
              calories: 12,
            },
            { name: "Mustard Seeds", nutrients: { Selenium: 7 }, calories: 10 },
            { name: "Cloves", nutrients: { Manganese: 30 }, calories: 8 },
            { name: "Fenugreek", nutrients: { Fiber: 3 }, calories: 20 },
            { name: "Anise", nutrients: { Calcium: 8 }, calories: 15 },
            { name: "Coriander", nutrients: { VitaminC: 4 }, calories: 5 },
          ],
        },
      ],
    },
  ],
};

export default mealData;
