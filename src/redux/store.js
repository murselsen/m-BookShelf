import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authReducer } from './Auth/slice';
import { bookReducer } from './Book/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});
export const perStore = persistStore(store);
