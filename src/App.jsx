import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
// Auth components
import RestrictedPage from './components/Auth/RestrictedPage';
import PrivatePage from './components/Auth/PrivatePage';

// Pages
const Home = lazy(() => import('./pages/Home/Home'));
const Category = lazy(() => import('./pages/Category/Category'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));

// Redux Operations
import { fetchBooks } from './redux/Book/operations';
const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedPage>
              <Login />
            </RestrictedPage>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedPage>
              <Register />
            </RestrictedPage>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
