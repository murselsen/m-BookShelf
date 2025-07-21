import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    try {
      console.log('Fetching books...');
      const response = await axios.get('top-books');
      console.log('Books fetched successfully:', response);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
