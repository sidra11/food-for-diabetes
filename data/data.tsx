import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category('c1', 'Breakfast', '#f5428d'),
  new Category("c2", "Lunch", "#f54242"),
  new Category("c3", "Brunch", "#f5a442"),
  new Category("c4", "Dinner", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
];
export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Avocado Toast with Egg",
    229,
    12,
    23,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Avocado_toast.jpg/800px-Avocado_toast.jpg",
    20,
    [
      "1 slice Gluten-Free Bread (or whole grain, toasted)",
      "1 ounce Small Haas Avocado (mashed, 1/4)",
      "1 Large Egg",
      "250g Spaghetti",
      "Kosher Salt And Black Pepper",
      "Red Pepper Flakes (or hot sauce, optional)",
    ],
    [
      " 1. Mash the avocado in a small bowl and season with salt and pepper.",
      "2. Heat a small nonstick skillet over low heat, when hot spray with oil and gently crack the egg into the skillet. Cover and cook until the egg sets and the yolk is to your liking.",
      "3. Place mashed avocado over toast, top with egg, sprinkle with salt and pepper and/or hot sauce or red pepper flakes, if desired!",
    ],
    false,
    false,
    false,
  ),
];
