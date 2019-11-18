import React from 'react';
import SignUpForm from '../components/SignUpForm/SignUp';
import TrailWord from '../animations/TrailWord';
import { HorNav } from '../components/navigation';

const SignUp = () => {
  return (
    <div className="signUpPage">
      <HorNav />
      <div>This is the Registration Page</div>
      <SignUpForm submit={console.log} />
      <TrailWord text="text" />
    </div>
  );
};

export default SignUp;
