import React from 'react';
import SignUpForm from '../../components/Auth/SignUpForm/SignUp';
import LogInForm from '../../components/Auth/LoginForm/LoginForm';

const OnBoarding = () => {
  return (
    <div>
      <SignUpForm />
      <LogInForm />
    </div>
  );
};

export default OnBoarding;
