import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealsItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import Meal from "../models/meal";


const FavoriteMealScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const meals = useSelector((state: RootState) => state.meals.meals);
  const mealsItem = useSelector((state: RootState) => state.favoriteMeals.ids);
  const favoriteMeals =  meals.filter((meal) => mealsItem.includes(meal.id));
  const renderMealItem = ({ item }: { item: Meal }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      cals: item.cals,
      carbs: item.carbs,
      protein: item.protein,
      duration: item.duration,
    };

    return (
      <MealItem
        ingredients={[]}
        steps={[]}
        isGlutenFree={false}
        isVegan={false}
        selectedMeal={undefined}
        {...mealItemProps}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={favoriteMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteMealScreen;
