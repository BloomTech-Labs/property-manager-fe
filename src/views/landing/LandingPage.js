/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import Spotlight from './Spotlight/Spotlight';
import Features from './Features/Features';
import Header from './Header/Header';

function LandingPage({ user }) {
  const checkForUser = user => {
    if (user) {
      navigate('/dashboard');
    }
  };
  useEffect(() => {
    checkForUser(user);
  }, [user]);

  return (
    <div className="landing-container">
      <div className="landing-content">
        <Header />
        <Spotlight />
        <Features />
      </div>
    </div>
  );
}

export default LandingPage;
