import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
