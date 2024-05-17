import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MealsScreen from "../screens/MealsScreen";

const Stack = createNativeStackNavigator();

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
