import React from 'react';
import { BiUser } from 'react-icons/bi';
import './Navbar.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    <div className={'AuthContainer'}>
      <div className={'AuthButton'}>
        <BiUser /> <span>Sign Up</span>
      </div>
    </div>
  ) : (
    <div className={'AuthContainer'}>
      <div className={'AuthButton'}>
        <BiUser /> Stephen
      </div>
      <div className={'AuthDropdown'}>
        <button type="button" className={'AuthLink'}>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
