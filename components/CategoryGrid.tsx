import React from "react";
import { Pressable, View, Text, StyleSheet, Platform,Image, ImageBackground} from "react-native";

interface CategoryGridProps {
  title: string;
  color?: string;
  image: string;
  onPress?: () => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  title,
  color,
  image,
  onPress,

}) => {
  return (
    
    <View style={[styles.itemGrid, ]}>
 
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        
        <View style={[styles.textContainer, { backgroundColor: color }]}>
        <ImageBackground source={{ uri: image }} style={styles.backgroundImage} > 
          
          </ImageBackground> 
          <Text style={styles.titleContainer}>{title}</Text>
        </View>
      </Pressable>
    </View>
 
  );
};

export default CategoryGrid;
const styles = StyleSheet.create({
  itemGrid: {
    flex: 1,
    flexDirection: 'column',
    margin: 16,
    height: 200,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  
  },
  buttonContainer: {
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row'

    

  },
  buttonPressed: {
    opacity: 0.5,
  },

  textContainer: {
    flex: 1,
   
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    
  },
  titleContainer: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    zIndex: 44,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'relative',
    objectFit: 'fill',
  
    textAlign:'center',
    justifyContent: 'flex-end',
    opacity: .55,

  
  },
});
