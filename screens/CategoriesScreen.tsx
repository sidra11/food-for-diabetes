import CategoryGrid from '../components/CategoryGrid';
import {CATEGORIES} from '../data/data';
import  { FlatList } from 'react-native';
import Category from '../models/category';


const renderCategoryItem = ({ item }: { item: Category }): JSX.Element => {
    return <CategoryGrid title = {item.title} color = {item.color}/>;
  };
  
  const CategoriesScreen: React.FC = () => {
    return (
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    );
  };

  export default CategoriesScreen;