import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealDetailScreen from "../screens/MealDetailScreen";
import MealScreen from "../screens/MealsScreen";

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
    <>
    <SafeAreaView style={styles.container} >
    <StatusBar barStyle={'light-content'}/>
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#573f3f'}, headerTintColor:'#cccc',contentStyle:{backgroundColor:'#504343'}}}>
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title:'Categories'}}/>
      <Stack.Screen name="MealsList" component={MealScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      
    </Stack.Navigator>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
