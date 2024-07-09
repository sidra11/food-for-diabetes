import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Meal from '../models/meal'; // Adjust the path as necessary

interface MealsState {
  meals: Meal[];
  loading: boolean;
  error: string | null;
}

const initialState: MealsState = {
  meals: [],
  loading: false,
  error: null,
};

export const fetchMeals = createAsyncThunk<Meal[], void, { rejectValue: string }>(
  'meals/fetchMeals',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://react-native-9927a-default-rtdb.firebaseio.com/meals.json');
      // Transform data if necessary
      return response.data;
    } catch (err) {
      return rejectWithValue('Failed to fetch meals');
    }
  }
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action: PayloadAction<Meal[]>) => {
        state.loading = false;
        state.meals = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default mealsSlice.reducer;
