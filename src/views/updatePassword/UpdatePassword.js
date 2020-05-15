/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { navigate } from '@reach/router';
import SubmitButton from '../../components/Buttons/SubmitButton';
import './updatepassword.scss';

function UpdatePassword() {
  const [formValues, setFormValues] = useState({
    email: '',
    updatePassword: '',
    checkPassword: ''
  });

  const handleSubmit = () => {
    navigate('/login');
  };

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleKeyPress = e => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="update-wrapper">
      <form className="updatepw-form" onSubmit={handleSubmit}>
        <h1 className="updatepw-title">Reset Password</h1>
        <hr className="line" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          className="updatepw-input"
          required
        />
        <input
          type="password"
          name="updatePassword"
          placeholder="Type new password"
          value={formValues.updatePassword}
          onChange={handleChange}
          className="updatepw-input"
          required
        />
        <input
          type="password"
          name="checkPassword"
          placeholder="Retype password"
          value={formValues.checkPassword}
          onChange={handleChange}
          className="updatepw-input"
          required
        />
        <SubmitButton />
        <p>
          Remember your password? Click
          <span
            className="updatepw-span"
            onClick={() => navigate('/login')}
            onKeyPress={handleKeyPress}
          >
            {' '}
            here!
          </span>
        </p>
      </form>
    </div>
  );
}

export default UpdatePassword;
