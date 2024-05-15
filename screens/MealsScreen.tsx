import { MEALS } from "../data/data";
import { View, Text, StyleSheet } from "react-native";
const MealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Overview </Text>
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
