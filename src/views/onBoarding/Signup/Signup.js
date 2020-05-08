import React from 'react';
import SignUpForm from '../../../components/Auth/SignUpForm/SignUpForm';
import '../../../scss/components/_onboardingForms.scss';

const Signup = () => {
  return (
    <div className="main-form-page-wrapper" data-testid="SignUpForm">
      <SignUpForm />
    </div>
  );
};

export default Signup;
