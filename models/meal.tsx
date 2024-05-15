class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  cals: number;
  protein: number;
  carbs: number;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;

  constructor(
      id: string,
      categoryIds: string[],
      title: string,
      cals: number,
      protein: number,
      carbs: number,
      imageUrl: string,
      duration: number,
      ingredients: string[],
      steps: string[],
      isGlutenFree: boolean,
      isVegan: boolean,
      isVegetarian: boolean,
  ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.cals = cals;
      this.protein = protein;
      this.carbs = carbs;
      this.imageUrl = imageUrl;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
  }
}

export default Meal;
