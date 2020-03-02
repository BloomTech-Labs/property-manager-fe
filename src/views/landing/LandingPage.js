/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HorNav } from '../../components/Navigation/navigation';
import Spotlight from './Spotlight/Spotlight';
import Features from './Features/Features';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-background2">
        <HorNav />
        <Spotlight />
        <Features />
      </div>
    </div>
  );
}

export default LandingPage;
