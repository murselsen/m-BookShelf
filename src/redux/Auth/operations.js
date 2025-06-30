import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_LOGIN } from './contacts';
axios.defaults.baseURL = 'http://localhost:5000/';

export const loginUser = createAsyncThunk(AUTH_LOGIN, async (_, thunkAPI) => {
  try {
    const response = await axios.post('/api/auth/login', _);

    if (response.status === 200) {
      // Assuming the response contains user data and a token
      const { user, token } = response.data;
      // Save the token to localStorage or cookies if needed
      localStorage.setItem('token', token);
      return { user, token };
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
