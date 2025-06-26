import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Category = lazy(() => import('./pages/Category/Category.jsx'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;
