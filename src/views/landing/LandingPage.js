/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HorNav } from '../../components/Navigation/navigation';
import Spotlight from './Spotlight/Spotlight';
import Features from './Features/Features';
import Header from './Header';

function LandingPage() {
  return (
    <div className="landing-container">
      <HorNav />
      <Header />
      <Spotlight />
      <Features />
    </div>
  );
}

export default LandingPage;
