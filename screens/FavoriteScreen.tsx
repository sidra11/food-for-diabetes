import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealsItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Meal from "../models/meal";
import { MEALS } from "../data/data";

const FavoriteMealScreen: React.FC = () => {
  const meals = useSelector((state: RootState) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) => meals.includes(meal.id));
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
