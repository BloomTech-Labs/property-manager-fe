import React from 'react';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faComments, faTasks } from '@fortawesome/free-solid-svg-icons';
import headerImage from '../../../assets/svg/header-image.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="header-image" src={headerImage} alt="housing" />
        <h4>Property Management doesn't have to be hard</h4>
      </div>
      <div className="right">
        <h4>
          <FontAwesomeIcon icon={faComments} /> Easy Communication
        </h4>
        <br />
        <h4>
          <FontAwesomeIcon icon={faTasks} /> Easy Management
        </h4>
        <br />
        <h4>
          <FontAwesomeIcon icon={faSpa} /> Peace of mind
        </h4>
        <button type="button" onClick={() => navigate('/signup')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
