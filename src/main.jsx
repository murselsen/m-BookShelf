import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, perStore } from './redux/store.js';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={perStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
