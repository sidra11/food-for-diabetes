import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MealsScreen from "../screens/MealsScreen";

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
    <>
    <SafeAreaView></SafeAreaView>
    <StatusBar barStyle={'light-content'}/>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#573f3f'}, headerTintColor:'#cccc',contentStyle:{backgroundColor:'#504343'}}}>
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title:'Categories'}}/>
      <Stack.Screen name="MealsList" component={MealsScreen} />
    </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
