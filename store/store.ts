import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './mealsSlice';
import favoritesReducer from './favoritesSlice'; // Assuming you have this

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    favoriteMeals: favoritesReducer, // If you have this
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
