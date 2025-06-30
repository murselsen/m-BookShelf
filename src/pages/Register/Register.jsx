import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { TfiEmail, TfiUser } from 'react-icons/tfi';
import { TbLockPassword } from 'react-icons/tb';
import './Register.css';

const Register = () => {
  const registerFormShema = yup.object().shape({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const handleSubmit = (v, actions) => {
    const { name, email, password } = v;

    // Here you would typically handle the register logic, e.g., sending a request to your backend
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    actions.resetForm(); // Reset the form after submission
  };

  return (
    <div className="Page">
      <div className="Card">
        <h1 className="Title">Register</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={registerFormShema}
          onSubmit={handleSubmit}
        >
          <Form className="Form">
            <FormInputGroup
              title="UserName"
              type="text"
              id="name458049850"
              name="name"
              icon={<TfiUser />}
            />
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

export default Register;
