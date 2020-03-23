import React from 'react';
import LogInForm from '../../components/Auth/LoginForm/LoginForm';
import '../../scss/components/_onboardingForms.scss';

const Login = () => {
  return (
    <div className="main-form-page-wrapper">
      <LogInForm />
    </div>
  );
};

export default Login;
