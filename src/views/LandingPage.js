import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import TrailWord from '../animations/TrailWord';
import { HorNav } from '../components/navigation';

const LandingPage = () => {
  return (
    <div>
      <HorNav />
      <div>This is the Landing Page</div>
      <LoginForm submit={console.log} />
      <TrailWord text="text" />
    </div>
  );
};

export default LandingPage;
