import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const initialState = {
  value: 'light', // Default theme
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.value === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});



const persistThemeReducer = persistReducer(
  {
    key: 'theme',
    storage: localStorage,
    whitelist: ['value'],
  },
  themeSlice.reducer
);

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeReducer = persistThemeReducer;
