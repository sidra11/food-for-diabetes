
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface FavoritesState {
  ids: string[];
}

// Define the payload type for the actions
interface FavoritePayload {
  id: string;
}

// Initial state
const initialState: FavoritesState = {
  ids: [],
};

// Create the slice with typed reducers
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoritePayload>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<FavoritePayload>) => {
      const index = state.ids.indexOf(action.payload.id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
});


export const { addFavorite, removeFavorite } = favoritesSlice.actions;


export default favoritesSlice.reducer;