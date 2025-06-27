import React from 'react';
import { useLocation } from 'react-router-dom';
import AuthNav from './AuthNav';
import './Navbar.css';
import logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="_logo">
        <img src={logo} alt="BookShelf Logo" width={36} height={36} />
        <span className="_logo-text">bookshelf</span>
      </div>
      <ul className="_links">
        <NavbarLink to={'/'} title={'Home'} />
      </ul>
      <div className="_auth">
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
    <nav className="user-nav">
      <ul>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/books">My Books</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
