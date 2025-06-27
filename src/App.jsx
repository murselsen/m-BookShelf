import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import RestrictedPage from './components/Auth/RestrictedPage.jsx';
import PrivatePage from './components/Auth/PrivatePage.jsx';
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Category = lazy(() => import('./pages/Category/Category.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Register = lazy(() => import('./pages/Register/Register.jsx'));

const App = () => {
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
