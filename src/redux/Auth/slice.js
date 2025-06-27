import { createSlice } from '@reduxjs/toolkit';
import { AUTH_SLICE } from './contacts';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const initialState = {
  user: {},
  token: null,
  isLogged: false,
  error: null,
};

const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState: initialState,
  reducers: {},
});

const persistAuthReducer = persistReducer(
  {
    key: AUTH_SLICE,
    storage: localStorage,
    whitelist: ['token'],
  },
  authSlice.reducer
);

export const authReducer = persistAuthReducer;
