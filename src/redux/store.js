import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authReducer } from './Auth/slice';
import { bookReducer } from './Book/slice';

export default () => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      book: bookReducer,
    },
  });
  const persistorStore = persistStore(store);
  return { store, persistorStore };
};
