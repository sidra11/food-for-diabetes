import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
interface MealItemProps {
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
const MealItem: React.FC<MealItemProps> = ({
  title,
  imageUrl,
  cals,
  carbs,
  protein,
  duration,
  onPress,
}) => {
  return (
    <View style={style.contentWrapper}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => (pressed ? style.contentPressed : null)}
        onPress={onPress}
      >
        <View style={style.innerWrapper}>
          <Image style={style.imageContainer} source={{ uri: imageUrl }} />
          <Text style={style.titleContainer}> {title}</Text>
          <View style={style.textWrapper}>
            <Text style={style.textContainer}> Calories: &nbsp;{cals}g</Text>
            <Text style={style.textContainer}> Carbs:&nbsp;{carbs}g</Text>
            <Text style={style.textContainer}> Protein:&nbsp;{protein}g</Text>
            <Text style={style.textContainer}>
              {" "}
              Duration:&nbsp; {duration}m
            </Text>
          </View>
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
