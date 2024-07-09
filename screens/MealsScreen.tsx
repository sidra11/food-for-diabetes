import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Meal from "../models/meal";
import MealItem from "../components/MealsItem";
import { RootStackParamList } from "../app/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchMeals } from "../store/mealsSlice";
import { CATEGORIES } from "../data/data";

type MealsScreenProps = StackScreenProps<RootStackParamList, "MealScreen">;

const MealScreen: React.FC<MealsScreenProps> = ({ route, navigation }) => {
  const cateId = route.params.categoryId;
  const dispatch = useDispatch<AppDispatch>();
  const meals = useSelector((state: RootState) => state.meals.meals);
  const loading = useSelector((state: RootState) => state.meals.loading);
  const error = useSelector((state: RootState) => state.meals.error);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  useEffect(() => {
    const cateTitle = CATEGORIES.find((category) => category.id === cateId)?.title;
    navigation.setOptions({ title: cateTitle });
  }, [cateId, navigation]);

  const displayRenderItem = meals.filter((mealItem: Meal) => {
    return mealItem.categoryIds.includes(cateId);
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

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

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
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
