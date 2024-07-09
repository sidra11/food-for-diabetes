import axios from '../services/firebase';
import { MEALS } from '../data/data'; // Adjust the path as necessary

const uploadMeals = async () => {
  try {
    const response = await axios.put('/meals.json', MEALS);
    console.log('Data uploaded successfully:', response.data);
  } catch (error) {
    console.error('Error uploading data:', error);
  }
};

uploadMeals();
