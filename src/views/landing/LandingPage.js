/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HorNav } from '../../components/Navigation/navigation';
import Spotlight from './Spotlight/Spotlight';
import Features from './Features/Features';

function LandingPage() {
  return (
    <div className="landing-container">
      <HorNav />
      <Spotlight />
      <Features />
    </div>
  );
}

export default LandingPage;
