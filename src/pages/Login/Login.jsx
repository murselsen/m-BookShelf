import React, { useState } from 'react';
import css from './Login.module.css';

const Login = () => {
  return (
    <div className={css.Page}>
      <div className={css.Card}>
        <h1 className={css.Title}>Login</h1>
        <form className={css.Form}>
          <FormInputGroup
            title="Email"
            type="email"
            id="email342323"
            name="email"
          />
          <FormInputGroup
            title="Password"
            type="password"
            id="pass4530945309"
            name="password"
          />
          <button type="submit" className={css.Button}>
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

const FormInputGroup = ({ title, type, id, name }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={[css.InputGroup, focus ? css.Focus : ''].join(' ')}>
      <label htmlFor={id} className={css.Label}>
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={css.Input}
        required
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

export default Login;
