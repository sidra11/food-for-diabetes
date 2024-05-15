import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native";
import Category from "../models/category";
import React from "react";

const CategoriesScreen: React.FC = ({ navigation }: any) => {
  const renderCategoryItem = ({ item }: { item: Category }): JSX.Element => {
    const pressHandles = () => {
      navigation.navigate("MealsList");
    };
    return (
      <CategoryGrid
        title={item.title}
        color={item.color}
        onPress={pressHandles}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
