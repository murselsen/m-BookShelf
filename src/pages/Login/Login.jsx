import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { TfiEmail } from 'react-icons/tfi';
import { TbLockPassword } from 'react-icons/tb';
import './Login.css';
import { loginUser } from '../../redux/Auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const loginFormShema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    console.log('Email:', email);
    console.log('Password:', password);

    dispatch(loginUser(values));
    actions.resetForm();  
  };

  return (
    <div className="Page">
      <div className="Card">
        <h1 className="Title">Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginFormShema}
          onSubmit={handleSubmit}
        >
          <Form className="Form">
            <FormInputGroup
              title="Email"
              type="email"
              id="email342323"
              name="email"
              icon={<TfiEmail />}
            />
            <FormInputGroup
              title="Password"
              type="password"
              id="pass4530945309"
              name="password"
              icon={<TbLockPassword />}
            />
            <button type="submit" className="Button">
              SIGN UP
            </button>
          </Form>
        </Formik>
        <ul className="FormLink">
          <FormLink title="Login" to="/login" />
          <FormLink title="Create Account" to="/register" />
          <FormLink title="Forgot Password?" to="/forgot-password" />
        </ul>
      </div>
    </div>
  );
};

const FormInputGroup = ({ title, type, id, name, icon = null }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={focus ? 'InputGroup Focus' : 'InputGroup'}>
      <Field
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
      {icon}
    </div>
  );
};

const FormLink = ({ title, to }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <li className={active ? 'FormLink_item active' : 'FormLink_item'}>
      <a href={to} className="FormLink_link">
        {title}
      </a>
    </li>
  );
};

export default Login;
