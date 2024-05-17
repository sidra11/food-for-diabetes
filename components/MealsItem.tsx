import { View,Text } from 'react-native';
import React from 'react';
interface MealItemProps {
    title: string;
  
  }
const MealItem:React.FC<MealItemProps> = ({title}) => {
    return <View><Text> {title}</Text></View>;

}
export default MealItem;