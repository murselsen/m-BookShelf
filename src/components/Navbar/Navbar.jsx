import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme';
import { useLocation } from 'react-router-dom';
import { FaCircle, FaShoppingBag } from 'react-icons/fa';
import AuthNav from './AuthNav';
import './Navbar.css';
import logo from '../../assets/logo.png';

import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="navbar">
      <div className="_logo">
        <img src={logo} alt="BookShelf Logo" width={36} height={36} />
        <span className="_logo-text">bookshelf</span>
      </div>
      <ul className="_links">
        <NavbarLink to={'/'} title={'Home'} />
        {isLoggedIn && <UserNav />}
      </ul>
      <div className="_auth">
        <ThemeToggle />
        <AuthNav />
      </div>
    </nav>
  );
};

const NavbarLink = ({ to, title, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <li className={isActive ? '_link active' : '_link '}>
      <a href={to}>{title}</a> {children}
    </li>
  );
};

const UserNav = () => {
  return (
    <>
      <NavbarLink to={'/shoppingList'} title={'Shopping List'}>
        <FaShoppingBag className="_icon" />
      </NavbarLink>
    </>
  );
};

const ThemeToggle = () => {
  const pageTheme = useSelector(state => state.theme.value);
  document.documentElement.setAttribute('data-theme', pageTheme);
  const [comTheme, setComTheme] = React.useState(pageTheme);
  const [isActive, setIsActive] = React.useState(pageTheme === 'dark');

  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = comTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    setComTheme(newTheme);
    setIsActive(!isActive);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      type="button"
      className={isActive ? '_theme-toggle active' : '_theme-toggle'}
      onClick={toggleTheme}
    >
      <FaCircle className="_icon" />
      {/* <FaCircle className="_icon" /> */}
    </button>
  );
};

export default Navbar;
