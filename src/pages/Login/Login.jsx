import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="Page">
      <div className="Card">
        <h1 className="Title">Login</h1>
        <form className="Form">
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
          <button type="submit" className="Button">
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
    <div className={focus ? 'InputGroup Focus' : 'InputGroup'}>
      <input
        type={type}
        name={name}
        id={id}
        className="Input"
        placeholder={title}
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
