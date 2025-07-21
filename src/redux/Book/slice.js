import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './operations';

const initialState = {
  books: [],
  categories : [],
  selectedCategory: null,
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = null;
    })
  }
});

export const bookReducer = bookSlice.reducer;
