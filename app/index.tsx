import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "../screens/MealDetailScreen";
import MealScreen from "../screens/MealsScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoriteMealScreen from "../screens/FavoriteScreen";
import { Provider } from "react-redux";
import store from "../store/store";

const Drawer = createDrawerNavigator();
const DrawerMenu = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#573f3f", height: 80 },
          headerTintColor: "#eae8e5cc",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#dad5d2" },
          drawerInactiveTintColor: "#473535",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#eead88",
        }}
      >
        <Drawer.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: "Categories",
            drawerIcon: ({ size }) => (
              <Ionicons name="list" color="#573f3f" size={size} />
            ),
          }}
        />
        <Drawer.Screen name="Favorites" component={FavoriteMealScreen} />
      </Drawer.Navigator>
    </>
  );
};

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#573f3f" },
              headerTintColor: "#cccc",
              contentStyle: { backgroundColor: "#504343" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerMenu}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsCategories"
              component={CategoriesScreen}
              options={{ title: "Categories" }}
            />
            <Stack.Screen name="MealsList" component={MealScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen}  />
          </Stack.Navigator>
        </Provider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
