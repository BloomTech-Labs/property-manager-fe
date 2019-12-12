/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HorNav } from '../../components/Navigation/navigation';

function LandingPage (props) {
  return (
    <div className="landing-container">
      <HorNav />
      {props.children}
    </div>
  );
};

export default LandingPage;
