import { View, Text, StyleSheet, Image, Platform, TextStyle } from "react-native";
import React from "react";
interface MealItemDetailProps {
  cals: number;
  carbs: number;
  protein: number;
  duration: number;
  textStyle?: TextStyle;
}

const MealItemDetail: React.FC<MealItemDetailProps> = (props) => {
  return (
    <View style={style.contentWrapper}>
      <Text style={[style.textContainer,props.textStyle]}> Calories: &nbsp;{props.cals}g</Text>
      <Text style={[style.textContainer,props.textStyle]}> Carbs:&nbsp;{props.carbs}g</Text>
      <Text style={[style.textContainer,props.textStyle]}> Protein:&nbsp;{props.protein}g</Text>
      <Text style={[style.textContainer,props.textStyle]}>
        {" "}
        Duration:&nbsp; {props.duration}m
      </Text>
    </View>
  );
};
export default MealItemDetail;
const style = StyleSheet.create({
  contentWrapper: {
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
