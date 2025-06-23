import { createSlice } from '@reduxjs/toolkit';
import { BOOK_SLICE } from './contacts';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: BOOK_SLICE,
  initialState: initialState,
  reducers: {},
});

export const bookReducer = bookSlice.reducer;
