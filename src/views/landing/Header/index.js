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
        <h4 className="left-text">
          Property Management doesn't have to be hard.
        </h4>
      </div>
      <div className="right">
        <div>
          <h4>
            <FontAwesomeIcon className="icon" icon={faComments} /> Easy
            Communication
          </h4>
          <br />
          <h4>
            <FontAwesomeIcon className="icon" icon={faTasks} /> Easy Management
          </h4>
          <br />
          <h4>
            <FontAwesomeIcon className="icon" icon={faSpa} /> Peace of mind
          </h4>
          <button
            className="header-button"
            type="button"
            onClick={() => navigate('/signup')}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
