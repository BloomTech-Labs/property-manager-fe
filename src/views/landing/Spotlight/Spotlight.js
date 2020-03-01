import React from 'react';
import SpotlightHeading from './SpotlightHeading';
import SpotlightCards from './SpotlightCards';

const Spotlight = () => {
  return (
    <div className="spotlightWrapper">
      <SpotlightHeading />
      <SpotlightCards />
    </div>
  );
};

export default Spotlight;
