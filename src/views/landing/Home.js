import React from 'react';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <h1>PropMan</h1>
        <h2>Property management doesn&apos;t have to be hard.</h2>
        <div className="front-page-adv">
          <div>
            <h4>
              <FontAwesomeIcon icon={faSpinner} spin /> Easy Communication{' '}
            </h4>
            <h4>
              <FontAwesomeIcon icon={faSpinner} spin /> Easy Management
            </h4>
            <h4>
              <FontAwesomeIcon icon={faSpinner} spin /> Peace of mind
            </h4>
          </div>
        </div>
        <button type="button" onClick={() => navigate('/signup')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
