import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../app/types";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import MealItemDetail from "./MealItemDetail";
export interface MealItemProps {
  selectedMeal: any;
  id:string;
  title: string;
  imageUrl: string;
  cals: number;
  carbs: number;
  protein: number;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  onPress?: () => void;
}
type NavProps = NativeStackNavigationProp<RootStackParamList>;
const MealItem: React.FC<MealItemProps> = (props) => {
  const navigation =useNavigation<NavProps>();
  const  pressMealItem = () => {
  navigation.navigate('MealDetail',
    {mealId:props.id}
  );
  }
  return (
    <View style={style.contentWrapper}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => (pressed ? style.contentPressed : null)}
     onPress={pressMealItem}
      >
        <View style={style.innerWrapper}>
          <Image style={style.imageContainer} source={{ uri: props.imageUrl }} />
          <Text style={style.titleContainer}> {props.title}</Text>
          <MealItemDetail cals={props.cals} carbs={props.carbs} protein={props.protein} duration={props.duration} />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
const style = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerWrapper: {
    overflow: "hidden",
  },
  contentPressed: {
    opacity: 0.25,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 8,
  },
  textContainer: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
