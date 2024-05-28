import { RouteProp } from '@react-navigation/native';

import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
    MealsCategories: undefined | {};
    MealScreen: {
      categoryId: string;
  
    };
    MealList: undefined | {};
      MealDetail: { mealId: string };
  };
  export type NavProps = NativeStackNavigationProp<RootStackParamList>;
 export  type RoutePropsList = RouteProp<RootStackParamList>;