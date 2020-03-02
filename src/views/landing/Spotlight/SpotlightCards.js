import React from 'react';
import images from './SpotlightCard';

const SpotlightCard = () => {
  return (
    <div className="spotlightCards">
      {images.map(({ src, alt, key, description }) => (
        <div key={key} className="spotlightCard">
          <img className="spotCardImages" src={src} alt={alt} />
          <h5 className="spotCardContent">{description}</h5>
        </div>
      ))}
    </div>
  );
};

export default SpotlightCard;
