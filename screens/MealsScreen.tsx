import React from "react";
import { MEALS } from "../data/data";
import { View, Text, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Meal from "../models/meal";

import MealItem from "../components/MealsItem";
import { RootStackParamList } from "../app/types";
import { FlatList } from "react-native";

type MealsScreenProps = StackScreenProps<RootStackParamList, "MealsScreen">;
const MealsScreen = ({ route }: MealsScreenProps) => {
  const cateId = route.params.categoryId;

  const displayRenderItem = MEALS.filter((mealItem: Meal) => {
    return mealItem.categoryIds.indexOf(cateId) >= 0;
  });
  const renderMealItem = ({ item }: { item: Meal }): JSX.Element => {
    const mealItemProps = {      title:item.title,
    imageUrl:item.imageUrl,
    cals:item.cals,
    carbs:item.carbs,
    protein:item.protein,
    duration: item.duration}
    return (
      <MealItem
      ingredients={[]} steps={[]} isGlutenFree={false} isVegan={false} {...mealItemProps}        // ingredients={item.ingredients}
        // steps={item.steps}
        // isGlutenFree={item.isGlutenFree}
        // isVegan={item.isVegan}
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

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
