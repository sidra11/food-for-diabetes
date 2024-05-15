import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsScreen from "../screens/MealsScreen";

const Stack = createStackNavigator();

export default function Page() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
      <Stack.Screen name="MealsList" component={MealsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});
