import React from 'react';
import CardImage from '../../../assets/svg/landing-docu-card.svg';

const SpotlightCard = () => {
  return (
    <div className="spotlightCard">
      <img
        className="spotCardImages"
        src={CardImage}
        alt="Documents being held."
      />
      <h5 className="spotCardContent">Lorem Ipsum</h5>
    </div>
  );
};

export default SpotlightCard;
