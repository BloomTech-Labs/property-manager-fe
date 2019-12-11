import React from 'react';
import { navigate } from '@reach/router';

const FrontPage = () => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <h1>PropMan</h1>
        <h2>Property management doesn&apos;t have to be hard.</h2>
        <button type="button" onClick={() => navigate('/signup')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
