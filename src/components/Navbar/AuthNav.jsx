import React from 'react';
import { BiSolidRightArrowAlt, BiUser } from 'react-icons/bi';
import './Navbar.css';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    <div className='_authContainer'>
      <a href="/login" type="button" className='_authButton'>
        <span className='_title'>Sign Up</span>
        <BiSolidRightArrowAlt className='_icon' />
      </a>
    </div>
  ) : (
    <div className={'_authContainer'}>
      <button type="button" className={'_authButton'}>
        <BiUser /> Stephen
      </button>
      <div className={'_authDropdown'}>
        <button type="button" className={'_authLink'}>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
