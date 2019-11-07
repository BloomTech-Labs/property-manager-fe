import React from 'react';
import LoginForm from '../components/LoginForm';
import HorNav from '../components/navigation';

const LandingPage = () => {
  return (
    <div>
      <HorNav />
      <div>This is the Landing Page</div>
      <LoginForm />
    </div>
  );
};

export default LandingPage;
