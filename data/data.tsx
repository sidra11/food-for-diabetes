import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Breakfast", "#f5428d"),
  new Category("c2", "Lunch", "#f54242"),
  new Category("c3", "Brunch", "#f5a442"),
  new Category("c4", "Dinner", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
];
export const MEALS = [
  new Meal(
    "m3",
    ["c1", "c2"],
    "Whole Wheat Blueberry Muffins",
    120,
    18,
    5,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Blueberry_muffins%2C_whole_and_partial.jpg/1280px-Blueberry_muffins%2C_whole_and_partial.jpg",
    35,
    [
      "1 cup whole wheat flour1 cup whole wheat flour.",
      "1 tsp baking soda.",
      "¼ cup Truvia Baking Blend",
      "½ cup blueberry yogurt",
      "¼ cup peanut butter",
      "2 eggs",
      "¾ cup blueberries"
    ],
    [
      "1.Preheat oven to 350 degrees Fahrenheit.",
      "2.Line muffin tin with paper liners.",
      "3.Combine flour, baking soda, salt, and Truvia in a large mixing bowl.",
      "4. In a separate bowl, whisk together blueberry yogurt, peanut butter, and eggs (wet ingredients). ",
      "5. Pour wet ingredients into the flour mixture and stir together until well combined.",
      " 6. Fold in blueberries. ",
      "7. Scoop muffin batter into lined muffin pan cups.",
      "8. Bake muffins at 350 degrees Fahrenheit for 15 minutes. "


    ],
    true,
    true,
    false
  ),
  new Meal(
    "m2",
    ["c1", "c2"],
    "Mixed Berry Smoothie",
    205,
    30,
    22,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sweet_Summer_Love_%284798432160%29.jpg/512px-Sweet_Summer_Love_%284798432160%29.jpg",
    5,
    [
      "1 cup plain nonfat strained yogurt (Greek or Icelandic)",
      "1 cup frozen mixed berries or frozen mixed berries with cherries",
      "1 tablespoon sweetener of choice",
      "2 tablespoons nonfat milk or any tart juice (cranberry, pomegranate, cherry)",
    ],
    [
      " Place all ingredients in a blender or a container for an immersion blender. Process until smooth.",
    ],
    true,
    true,
    false
  ),
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
      "Kosher Salt And Black Pepper",
      "Red Pepper Flakes (or hot sauce, optional)",
    ],
    [
      " 1. Mash the avocado in a small bowl and season with salt and pepper.",
      "2. Heat a small nonstick skillet over low heat, when hot spray with oil and gently crack the egg into the skillet. Cover and cook until the egg sets and the yolk is to your liking.",
      "3. Place mashed avocado over toast, top with egg, sprinkle with salt and pepper and/or hot sauce or red pepper flakes, if desired!",
    ],
    true,
    true,
    false
  ),
  new Meal(
    "m4",
    ["c1", "c2"],
    "Brown Butter Pear Rhubarb Ginger Muffins",
    202,
    4,
    37,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cinnamon_Muffin_%281%29.jpg/1280px-Cinnamon_Muffin_%281%29.jpg",
    40,
    [
      "150 grams Wholemeal Self-Raising Flour",
      "150g (1 cup) white self-raising flour",
      "1 teaspoon Ground Cinnamon",
      "½ teaspoonGround Nutmeg",
      "1 Tbsp (15 mL) fresh grated ginger",
      "115g (½ cup) + 1 Tbsp sugar (golden caster)",
      "45 g (3 Tbsp) butter, melted",
      "1 egg, lightly beaten",
      "2 Tbsp runny honey",
      "250ml (1 cup) milk ",
      "2 cups rhubarb, chopped into 2cm lengths",
      "1 pear, peeled and cut into small cubes",

    ],
    [
      " Pre-heat the oven to 190C",
      "Stir 1 Tbsp of the caster sugar into the chopped rhubarb",
      "Mix both flours, cinnamon, ginger and nutmeg into a large bowl, then add the sugar.",
      "In a separate bowl, combine the butter, egg, honey and milk. Pour this mix into the dry ingredients and stir gently until just combined but do not overmix",
      "Fold the rhubarb and pear into the mix - the mixture will be quite dense and relatively dry, rather than a batter.",
      "Spoon the mixture into lightly greased muffin tins (12 standard or 6 jumbo muffin cups)",
      "Bake for about 25 minutes or until golden - test by checking if a skewer inserted into the centre of a muffin comes out clean",
      "Allow to fool for 5 minutes, then run a palette knife round the rip of each muffin cup and remove from the tin"
    ],
    true,
    true,
    true
  ),
];
