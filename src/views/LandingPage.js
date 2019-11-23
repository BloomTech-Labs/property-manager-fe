import React from 'react';
import { navigate } from '@reach/router';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingContent">
        <div className="centered">
          <h1>PropMan</h1>
          <h2>Property management doesn&apos;t have to be hard.</h2>
          <button type="button" onClick={() => navigate('/signup')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
