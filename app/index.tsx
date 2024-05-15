import { SafeAreaView, StatusBar, StyleSheet} from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen";


export default function Page() {
  return (
    <>
    <SafeAreaView>
    <StatusBar backgroundColor="#61dafb" barStyle="dark-content"  animated/>
   <CategoriesScreen/>
   </SafeAreaView>
   
   </>
  );
}

const styles = StyleSheet.create({
  container: {}});
