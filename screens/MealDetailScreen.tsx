import React from "react";
import { View, Text, StyleSheet, Image, TextStyle, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../app/types";
import { MEALS } from "../data/data";
import MealItemDetail from "../components/MealItemDetail";

type Props = StackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen: React.FC<Props> = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  if (!selectedMeal) {
    return (
      <View style={styles.container}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView>
    <View style={styles.screen}>
  
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealItemDetail
        duration={selectedMeal.duration}
        cals={selectedMeal.cals}
        carbs={selectedMeal.carbs}
        protein={selectedMeal.protein}
        textStyle={styles.textContainer}
      />
      <View>
        <Text style={styles.subtitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.text}>
            {ingredient}
          </Text>
        ))}
      </View>
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step} style={styles.text}>
          {step}
        </Text>
      ))}
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 8,
    color: "#d98b5b",
    textAlign: "center",
    borderBottomColor: "#d98b5b",
    borderBottomWidth: 3,
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    color: "white",
  },
  textContainer: {
    fontSize: 16,
    marginVertical: 4,
    color: "white",
    textAlign: "center",
  },
});

export default MealDetailScreen;
