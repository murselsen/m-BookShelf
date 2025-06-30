import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authReducer } from './Auth/slice';
import { bookReducer } from './Book/slice';
import { themeReducer } from './theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    book: bookReducer,
  },
});
export const perStore = persistStore(store);
