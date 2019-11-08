import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import TrailWord from '../animations/TrailWord';

const LandingPage = () => {
  return (
    <div>
      <div>This is the Landing Page</div>
      <LoginForm submit={console.log} />
      <TrailWord text="wtf" />
    </div>
  );
};

export default LandingPage;
