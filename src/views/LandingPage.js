import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const LandingPage = () => {
  return (
    <div>
      <div>This is the Landing Page</div>
      <LoginForm submit={console.log} />
    </div>
  );
};

export default LandingPage;
