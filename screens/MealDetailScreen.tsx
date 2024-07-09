import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../app/types";
// import { MEALS } from "../data/data";
import MealItemDetail from "../components/MealItemDetail";
import IconButton from "../components/IconButton";
 import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchMeals } from "../store/mealsSlice";
type Props = StackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen: React.FC<Props> = ({ route, navigation  }) => {
  const mealId = route.params.mealId;
  
  const dispatch = useDispatch<AppDispatch>();
  const meals = useSelector((state: RootState) => state.meals.meals);
  const loading = useSelector((state: RootState) => state.meals.loading);
  const error = useSelector((state: RootState) => state.meals.error);
  const favoriteMealIds = useSelector((state:RootState) => state.favoriteMeals.ids);
  const selectedMeal = meals.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const toggleFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
     
      dispatch(removeFavorite(mealId));
    } else {
 
      dispatch(addFavorite(mealId ));
    }
  };
  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View><IconButton
            onPress={toggleFavoriteStatusHandler}
            icon={mealIsFavorite? 'heart': 'heart-outline'}
            color="red"
          ></IconButton>
          <Text style={{ color: mealIsFavorite ? 'red' : 'white' }}>Favorites</Text></View>
        );
      },
    });
  });
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
  favText: {
    color: 'white',
    marginBottom: 12,
    justifyContent: 'center'
  }, 

});

export default MealDetailScreen;
