import React from "react";
import { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/data";
import { FlatList, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Meal from "../models/meal";

import MealItem from "../components/MealsItem";
import { RootStackParamList } from "../app/types";

type MealsScreenProps = StackScreenProps<RootStackParamList, "MealScreen">;
const MealScreen: React.FC<MealsScreenProps> = ({ route, navigation }) => {
  const cateId = route.params.categoryId;

  const displayRenderItem = MEALS.filter((mealItem: Meal) => {
    return mealItem.categoryIds.indexOf(cateId) >= 0;
  });
  useEffect(() => {
    const cateTitle = CATEGORIES.find(
      (category) => category.id === cateId
    )?.title;
    navigation.setOptions({ title: cateTitle });
  });

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
        selectedMeal={undefined}
        ingredients={[]}
        steps={[]}
        isGlutenFree={false}
        isVegan={false}
        {...mealItemProps}
      />
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={displayRenderItem}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
