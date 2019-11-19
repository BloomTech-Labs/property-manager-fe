import React from 'react';
import { navigate } from '@reach/router';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingContent">
        <h2>PropMan</h2>
        <h1>Property management doesn&apos;t have to be hard.</h1>
        <button type="button" onClick={() => navigate('/signup')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
