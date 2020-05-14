import React, { useState } from 'react';
import SubmitButton from '../../components/Buttons/SubmitButton';
import './updatepassword.scss';

function UpdatePassword() {
  const [formValues, setFormValues ] = useState({
    updatePassword: '',
    checkPassword: ''
  });

  const handleSubmit = values => {

  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="update-wrapper">
      <form className="updatepw-form" onSubmit={handleSubmit}>
        <h1 className="updatepw-title">Reset Password</h1>
        <hr className="line" />
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
      </form>
    </div>
  );
}

export default UpdatePassword;
