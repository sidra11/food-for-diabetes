import React from "react";
import { Pressable,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const IconButton = ({ onPress, color,icon }: any) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={36} color={color} />
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: .7,
    }

})
